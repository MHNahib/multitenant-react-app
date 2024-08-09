# Subdomain Routing React App

This project is a React-based web application that dynamically routes users to different pages based on the subdomain in the URL. It handles routing for subdomains like `dev`, `prod`, `auth`, and `test`, displaying appropriate pages based on the detected subdomain.

## Features

- **Subdomain Detection:** Detects and processes subdomains from the URL.
- **Dynamic Routing:** Routes users to the appropriate pages based on the active subdomain.
- **Loader Display:** Shows a loading indicator while subdomain processing is in progress.
- **Fallback to Landing or Not Found Pages:** Redirects to a default landing page or a not found page if the subdomain is invalid or unavailable.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to:
   ```bash
   http://localhost:5173
   ```
   Modify the URL to test different subdomains, e.g., `http://dev.localhost:5173`.

## Project Structure

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── Pages
│   │   ├── Domain
│   │   │   └── Domain.Page.tsx
│   │   ├── Home
│   │   │   └── Home.Page.tsx
│   │   └── NotFound
│   │       └── NotFound.Page.tsx
│   ├── model.ts
│   ├── utils.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

- **`Pages/`**: Contains the different pages rendered based on subdomain.
  - **`Domain/`**: Page for specific subdomains.
  - **`Home/`**: Default landing page.
  - **`NotFound/`**: Fallback page for invalid subdomains.
- **`model.ts`**: Defines TypeScript models used across the application.
- **`utils.ts`**: Contains utility functions like `getSubdomain` for processing URLs.
- **`App.tsx`**: Main application component handling routing logic.
- **`index.tsx`**: Entry point of the application.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

1. Fork the project.
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README template gives a clear overview of your project, guiding users through installation, usage, and the codebase structure. Adjust the details to better fit your actual project.
