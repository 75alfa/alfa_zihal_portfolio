# Migration Guide: Work Items to Sanity CMS

This guide explains how to migrate the existing work items from `lib/data.ts` to Sanity CMS.

## Steps to Migrate Work Items

1. **Start Sanity Studio**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000/studio`

2. **Create Work Items in Sanity**
   - Go to the "Work" section in Sanity Studio
   - For each work item in `lib/data.ts`, create a new document with the following fields:
     - **id**: Use the same ID from the data file (e.g., "ent1", "ent2", "p1", "p2")
     - **title**: The work item title
     - **type**: The type (e.g., "Enterprise", "Mobile App", "Web Design")
     - **description**: The description text
     - **isEnterprise**: Checkbox (true for enterprise items)
     - **isMobile**: Checkbox (true for mobile apps)
     - **period**: Period string (e.g., "2026 - Present")
     - **logoInitials**: Logo initials (e.g., "GT", "FS")
     - **coverImage**: Upload an image
     - **overview**: Object with:
       - **goal**: The goal text
       - **logic**: The logic text
       - **stat**: The stat text
     - **projects**: Array of project objects (for enterprise items) with:
       - **name**: Project name
       - **desc**: Project description
       - **details**: Project details
     - **context**: Context text (for case studies)
     - **problem**: Problem text (for case studies)
     - **solution**: Solution text (for case studies)
     - **tags**: Array of tag strings

3. **Create Site Content Document**
   - Go to the "Site Content" section
   - Create a single document with all site-wide content:
     - **hero**: Hero section content
     - **methodology**: Methodology section with steps
     - **cta**: CTA section content
     - **navigation**: Navigation labels
     - **footer**: Footer content
     - **workSectionTitle**: "SOME OF MY WORK"

4. **Create Profile Document**
   - Go to the "Profile" section
   - Create a single document with:
     - **profileText**: Profile description
     - **skills**: Array of skill categories
     - **education**: Array of education entries
     - **contactInfo**: Contact information
     - **availability**: Availability text

## Sample Data Structure

### Work Item Example (Enterprise)
```json
{
  "id": "ent1",
  "title": "Global Tech Corp",
  "type": "Enterprise",
  "description": "Senior UX Designer (Contract)",
  "isEnterprise": true,
  "period": "2026 - Present",
  "logoInitials": "GT",
  "overview": {
    "goal": "Lead internal design ops",
    "logic": "Atomic System Architecture",
    "stat": "3+ Scaled Products"
  },
  "projects": [
    {
      "name": "Internal CRM Overhaul",
      "desc": "Simplified lead management for 500+ agents.",
      "details": "Cohesive interface design."
    }
  ],
  "tags": ["Enterprise", "B2B"]
}
```

### Site Content Example
```json
{
  "hero": {
    "headline": "Alfa Zihal: UX & Product Designer",
    "subheadline": "I focus on the logic before the pixels...",
    "ctaPrimary": "Hire me !",
    "ctaSecondary": "Work History",
    "experienceBadge": "+5 years experience"
  },
  "methodology": {
    "title": "My Design Methodology",
    "steps": [
      {
        "number": 1,
        "title": "Research",
        "description": "Mapping user mental models & defining core logic friction.",
        "icon": "Search"
      }
    ],
    "quote": "I prioritize functionality and clarity..."
  },
  "workSectionTitle": "SOME OF MY WORK"
}
```

## After Migration

Once all content is migrated to Sanity:
1. The application will automatically fetch content from Sanity
2. You can remove `lib/data.ts` (already handled in cleanup)
3. All content can be edited through Sanity Studio without code changes
