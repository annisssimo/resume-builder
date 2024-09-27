# Resume Builder

A simple web application to create and preview resumes with ease. Built using **React** and **TypeScript**, this tool allows users to input their personal data, work experience, education, skills, and contact information, and generates a professional resume that can be downloaded as a PDF.

## Table of Contents

- [Resume Builder](#resume-builder)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
    - [Key Components:](#key-components)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)

## Features

- Add and edit personal information, including name, job position, and a profile photo.
- Input work experience, education history, and skills.
- Preview your resume in real-time.
- Export the resume as a **PDF** file.
- Responsive design for an optimal experience across devices.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/annisssimo/resume-builder.git
   cd resume-builder
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm run dev
   ```

   The application will run locally on [http://localhost:5173](http://localhost:5173).

## Usage

1. After starting the app, you'll be able to fill in the various forms, such as:

   - **Personal Data**: Name, profile picture, job position, etc.
   - **Work Experience**: Add multiple jobs with start/end dates and descriptions.
   - **Education**: Add education history and degrees.
   - **Skills**: List your relevant skills.

2. As you fill in the forms, the **Resume Preview** will update in real-time.

3. Once you're satisfied with your resume, click the **Download** button (cloud icon) to save your resume as a **PDF**.

## Project Structure

```
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── components
│   │   ├── Button
│   │   ├── ContactsForm
│   │   ├── EducationForm
│   │   ├── PersonalDataForm
│   │   ├── ResumePreview
│   │   ├── SkillsForm
│   │   ├── WorkExperienceForm
│   ├── types
│   ├── utils.ts
│   └── App.tsx
├── tsconfig.json
└── vite.config.ts
```

### Key Components:

- `PersonalDataForm`: Form for inputting personal data (name, job position, etc.).
- `WorkExperienceForm`: Form for adding job experiences.
- `EducationForm`: Form for adding education details.
- `SkillsForm`: Form for listing your skills.
- `ResumePreview`: Preview of the resume, updated in real-time.
- `utils.ts`: Helper functions (e.g., for saving data).

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Static typing to ensure code quality.
- **Vite**: Fast build tool for development.
- **Immer**: To easily update immutable state in React.
- **html2pdf.js**: For converting HTML into a downloadable PDF.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request to suggest improvements or fix bugs.
