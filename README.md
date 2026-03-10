# Student Management System

A modern, responsive student management application built with React.js and Vite.

## Features

### ✅ Core Functionality
- **Student List**: Display all students with Name, Email, Age, and Actions (Edit/Delete)
- **Add Student**: Form with validation (all fields mandatory, valid email format)
- **Edit Student**: Pre-filled form with the same validations
- **Delete Student**: Confirmation dialog before deletion
- **Search Functionality**: Search students by name or email
- **Excel Download**: Download filtered or full student data as Excel file

### ✅ UI/UX Features
- **Loading State**: Simulated loading experience
- **Responsive Design**: Works on desktop and mobile devices
- **Modal Forms**: Clean, modern modal dialogs
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Gradient Background**: Beautiful purple gradient theme
- **Material Design Icons**: Consistent icon set

### ✅ Validation
- All fields are required
- Email format validation
- Age range validation (1-120)
- Real-time error feedback

## Tech Stack

- **React.js 18** - UI framework
- **Vite** - Build tool and dev server
- **XLSX** - Excel file generation
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── StudentForm.jsx       # Form for adding/editing students
│   ├── StudentForm.css
│   ├── StudentTable.jsx      # Table component with search and download
│   ├── StudentTable.css
│   ├── LoadingState.jsx      # Loading indicator
│   └── LoadingState.css
├── data/
│   └── students.json         # Initial student data
├── App.jsx                   # Main application component
├── App.css
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## Usage

### Adding a Student
1. Click the "+ Add Student" button
2. Fill in the form fields
3. Click "Add Student"

### Editing a Student
1. Click the edit button (pencil icon) next to the student
2. Update the fields in the form
3. Click "Update Student"

### Deleting a Student
1. Click the delete button (trash icon) next to the student
2. Confirm the deletion in the dialog

### Searching Students
1. Type a search term in the search box
2. The table will filter results in real-time

### Downloading Excel
1. Click the "Download Excel" button
2. A filtered or complete list of students will download as an Excel file

## Deployment

The application can be deployed to:

### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Netlify
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run `netlify deploy`
3. Choose "Create & configure new site" or select an existing site
4. Deploy to production with `netlify deploy --prod`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
