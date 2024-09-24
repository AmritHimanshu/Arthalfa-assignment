## https://arthalfa-assignment.vercel.app/

# Arthalfa Assignment

This is a real-time text analysis and string replacement web application built using React. The application allows users to enter text, analyze the unique words and total character count, and replace specific text strings with new ones while highlighting them.

## Live Demo

The application is hosted on Vercel. You can view the live version of the app here:

🔗 **[Arthalfa Assignment - Live Demo](https://arthalfa-assignment.vercel.app/)**

## Features

- **Real-Time Text Analysis:** 
  - Calculates the number of unique words.
  - Provides a total character count (excluding special characters and spaces).
  
- **Text Replacement and Highlighting:**
  - Allows replacing specific words or text with new text.
  - Highlights the replaced text using the `<mark>` HTML tag.
  
- **Debounced Text Processing:**
  - The text analysis is debounced to improve performance and avoid unnecessary calculations on every key press.
  
- **Editable Content Area:** 
  - Users can directly enter and edit text in a content-editable `div`.

## How to Run Locally

To run this project locally, follow these steps:

### 1. Clone the Repository
First, clone the repository using the following command:
```bash
git clone https://github.com/AmritHimanshu/Arthalfa-assignment.git
```

### 2. Navigate to the Working Directory
Once the repository is cloned, move inside the project directory:
```bash
cd Arthalfa-assignment/client
```

### 3. Install Dependencies
Before running the application, you need to install all the necessary dependencies. Run the following command in your terminal:
```bash
npm install
```

### 4. Run the Application
Once the dependencies are installed, you can start the application by running:
```bash
npm start
```

This will start the development server, and you can view the application by navigating to http://localhost:3000 in your browser.

## Technologies Used
- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for fast UI development.