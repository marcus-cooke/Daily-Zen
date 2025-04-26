# Daily Zen

A static website that displays inspirational and motivational quotes on a daily basis. The site automatically updates with a new quote each day, providing users with daily inspiration in a clean, minimalist interface.

## Features

- 📜 **Daily Quote Display**: Shows a new quote every day on the homepage
- 🗃️ **Quote Archive**: Browse through past quotes
- 🏷️ **Categories/Tags**: Organize quotes by themes or authors
- 🔄 **Social Sharing**: Share quotes on social media
- 📱 **Mobile-Responsive Design**: Optimal viewing experience across all devices
- 🌓 **Dark/Light Mode**: Toggle between theme preferences

## Technology Stack

- **Frontend Framework**: Gatsby.js
- **Styling**: Styled Components
- **Hosting**: GitHub Pages
- **Version Control**: Git/GitHub
- **Data Source**: JSON file for quotes database

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/daily-zen.git
   cd daily-zen
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run develop
   ```

4. Open your browser and navigate to `http://localhost:8000`

### Building for Production

To create a production build:

```
npm run build
```

To serve the production build locally:

```
npm run serve
```

## Project Structure

```
src/
│   ├── components/
│   │   ├── Layout.js
│   │   ├── QuoteDisplay.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── SEO.js
│   ├── pages/
│   │   ├── index.js
│   │   ├── archive.js
│   │   └── about.js
│   ├── templates/
│   │   └── category-template.js
│   ├── data/
│   │   └── quotes.json
│   └── images/
├── gatsby-config.js
├── gatsby-node.js
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All the authors of these beautiful quotes
- The Gatsby.js team for creating an amazing framework 