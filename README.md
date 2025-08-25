# Darsh Shah Portfolio

A modern, responsive portfolio website built with React, Three.js, and Tailwind CSS. Features 3D animations, interactive elements, and a professional design.

## 🚀 Features

- **3D Animations**: Interactive 3D models using Three.js
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Smooth animations and transitions
- **Contact Form**: Integrated email functionality
- **Portfolio Showcase**: Project gallery with detailed descriptions
- **Skills Section**: Technology stack visualization

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: GSAP, Framer Motion
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/darsh-portfolio.git
   cd darsh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect it's a Vite project
4. Deploy with one click

### Alternative: Render
1. Push your code to GitHub
2. Create a new Static Site on Render
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── canvas/         # 3D scene components
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Experience.jsx  # Experience timeline
│   ├── Works.jsx       # Portfolio projects
│   └── Contact.jsx     # Contact form
├── assets/             # Images and static files
├── constants/          # Configuration constants
├── utils/              # Utility functions
└── styles.js           # Tailwind CSS classes
```

## 🔧 Configuration

- Update personal information in `src/constants/index.js`
- Modify 3D models in `src/components/canvas/`
- Customize styling in `tailwind.config.cjs`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

1. **Colors**: Modify the color scheme in `tailwind.config.cjs`
2. **Content**: Update text and images in component files
3. **3D Models**: Replace GLTF files in `public/` directory
4. **Animations**: Adjust GSAP and Framer Motion settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Built with ❤️ using React and Three.js
