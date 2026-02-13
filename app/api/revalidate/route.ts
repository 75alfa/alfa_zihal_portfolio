import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Verify secret token
    const secret = request.headers.get("x-revalidate-secret");
    const expectedSecret = process.env.REVALIDATE_SECRET;

    if (!expectedSecret) {
      console.error("REVALIDATE_SECRET is not set in environment variables");
      return NextResponse.json(
        { message: "Revalidation not configured" },
        { status: 500 }
      );
    }

    if (secret !== expectedSecret) {
      return NextResponse.json(
        { message: "Invalid secret" },
        { status: 401 }
      );
    }

    // Parse webhook payload
    const body = await request.json();
    const { _type, _id, slug } = body;

    if (!_type) {
      return NextResponse.json(
        { message: "Missing document type" },
        { status: 400 }
      );
    }

    // Revalidate paths based on document type
    switch (_type) {
      case "post": {
        // Revalidate blog listing page
        revalidatePath("/blog");
        
        // Revalidate specific blog post if slug is provided
        if (slug?.current) {
          revalidatePath(`/blog/${slug.current}`);
        } else {
          // If slug not provided, revalidate all blog posts
          revalidatePath("/blog", "layout");
        }
        
        // Also revalidate home page (has blog teaser)
        revalidatePath("/");
        
        return NextResponse.json({
          revalidated: true,
          paths: ["/blog", slug?.current ? `/blog/${slug.current}` : "all blog posts", "/"],
        });
      }

      case "work": {
        // Revalidate home page (shows work items)
        revalidatePath("/");
        
        // Revalidate work item detail page if ID is provided
        if (_id) {
          const encodedId = encodeURIComponent(_id);
          revalidatePath(`/work/${encodedId}`);
          // Also revalidate project detail pages (they're nested under work/[id])
          revalidatePath(`/work/${encodedId}`, "layout");
        } else {
          // If ID not provided, revalidate all work pages
          revalidatePath("/work", "layout");
        }
        
        // Revalidate resume page (shows work history)
        revalidatePath("/resume");
        
        return NextResponse.json({
          revalidated: true,
          paths: [
            "/",
            _id ? `/work/${encodeURIComponent(_id)}` : "all work pages",
            "/resume",
          ],
        });
      }

      case "siteContent": {
        // Site content affects all pages via layout
        revalidatePath("/", "layout");
        revalidatePath("/blog", "layout");
        revalidatePath("/work", "layout");
        revalidatePath("/contact", "layout");
        revalidatePath("/resume", "layout");
        
        return NextResponse.json({
          revalidated: true,
          paths: ["all pages (via layout)"],
        });
      }

      case "profile": {
        // Profile affects contact and resume pages
        revalidatePath("/contact");
        revalidatePath("/resume");
        
        return NextResponse.json({
          revalidated: true,
          paths: ["/contact", "/resume"],
        });
      }

      default:
        return NextResponse.json(
          { message: `Unknown document type: ${_type}` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error("Error revalidating:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
