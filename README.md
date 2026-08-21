# Professional Canvas

Build a clean, high-end, personal portfolio website with a dark/black-and-white minimal aesthetic, tailored for a senior professional.

### 1. Aesthetic, Typography & Design Tokens

- Style: Minimalist, chic, highly professional, black-and-white theme. Use pure black (#000000), rich dark grays (#0D0D0D, #1A1A1A), subtle off-white text (#EDEDED), and soft zinc accents for borders/dividers.

- Typography: Do NOT use default system fonts (Arial/Inter/Roboto). Use a refined combination like 'Plus Jakarta Sans' or 'Outfit' for clean modern headings, paired with 'Geist' or 'Satoshi' for body text.

- Animations: Subtle, smooth fade-in and slide-up animations on scroll for elements using Framer Motion or Tailwind transition utilities. Keep animations short (~300ms–400ms) and crisp.

### 2. Website Structure & Navigation

Include a persistent sticky top navigation bar with smooth-scrolling links to the following sections:

1. Home

2. About

3. Experience & Education

4. Projects

5. Resume

6. Blogs

7. Contact

---

### 3. Section Specifications

#### A. Home

- Headline with a strong professional value proposition.

- Placeholder image block for a profile photo (styled with a refined border, balanced aspect ratio, grayscale finish until hovered).

- Primary Call to Action buttons: "View Projects" and "Get in Touch".

#### B. About

- Detailed summary section detailing core technical expertise, career highlights, and impact.

- Skill badges/tags rendered in dark dark-mode cards with subtle hover borders.

#### C. Experience & Education

- Vertical timeline or dual-column grid showcasing professional role history and educational background.

- Include company names, job titles, dates, key responsibilities, and achievements.

#### D. Projects (Extensible Architecture)

- Build a modular grid of project cards.

- **CRITICAL REQUIREMENT FOR EXTENSIBILITY:** Define project data inside a clean, centralized local data array/JSON object (e.g., `projectsData = [{ title, description, tags, image, projectUrl, repoUrl }]`) and map over it to render the UI components. Ensure that adding a new project requires only appending a new object block to this array, without duplicating JSX markup manually.

- Each project card should display: Project Title, Brief Description, Tech Stack tags, Image Preview, Live Demo Link, and Source Code Link.

#### E. Resume

- Dedicated preview card highlighting key qualifications.

- A prominent "Download Resume" button configured to trigger a PDF download.

#### F. Blogs

- Card layout displaying articles/posts with title, publishing date, reading time estimate, short excerpt, and direct external link.

#### G. Contact & Social Media

- Clean contact form (Name, Email, Message) with responsive validation.

- Social media and direct contact bar with icons and direct links for:

  - Phone Number (`tel:`)

  - LinkedIn

  - X (formerly Twitter)

  - Medium

  - Email (`mailto:`)

---

### 4. Code Quality & Responsiveness

- Fully responsive across mobile, tablet, and desktop viewports.

- Clean, component-based React/Tailwind structure.

- Parse and incorporate all relevant background details, experience, skills, and projects from the resume provided below into the corresponding site sections.

---

