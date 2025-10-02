# 🏃‍♂️ VAM Test Calculator

A modern Angular application for calculating personalized running training zones based on VAM (Maximum Aerobic Velocity) test results.

![Angular](https://img.shields.io/badge/Angular-19.1.5-red?logo=angular)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-blue?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 About

The VAM Test Calculator helps runners determine their optimal training zones by analyzing their Maximum Aerobic Velocity test results. The application provides:

- **Personalized Training Zones**: Calculate pace and heart rate zones based on your VAM test
- **Dual Input Methods**: Enter your data by pace or distance covered
- **Educational Content**: Learn about VAM testing with integrated modal information
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## ✨ Features

### 🎯 Core Functionality
- **VAM Data Input**: Two modes for entering test results
  - By Pace: Enter your rhythm per kilometer (min/km)
  - By Distance: Enter distance covered in 5 minutes
- **Heart Rate Integration**: Input maximum heart rate from your test
- **Training Zone Calculation**: Generate personalized training zones
- **Results Export**: Download your calculated zones (coming soon)

### 🎨 User Experience
- **Interactive Hero Section**: Eye-catching landing with call-to-action
- **Educational Modal**: Complete guide on what VAM testing is and how to perform it
- **Form Validation**: Input validation with helpful user feedback
- **Responsive Design**: Mobile-first approach with smooth animations
- **Accessibility**: WCAG compliant with keyboard navigation support

### 🛠️ Technical Features
- **Angular 19**: Latest Angular framework with standalone components
- **Tailwind CSS 4**: Modern utility-first CSS framework
- **TypeScript**: Full type safety and modern JavaScript features
- **Component Architecture**: Modular, reusable component structure
- **Service Communication**: Reactive state management between components

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Angular CLI 19+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarkelK14/vam-test.git
   cd vam-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── hero/                 # Landing hero section
│   │   ├── vam-result-form/      # Main calculation form
│   │   └── vam-info-modal/       # Educational modal
│   ├── services/
│   │   └── modal.service.ts      # Modal state management
│   ├── app.component.*           # Root component
│   └── app.config.ts             # App configuration
├── styles.css                    # Global styles & Tailwind config
└── index.html                    # HTML entry point
```

## 🏃‍♂️ VAM Testing Guide

### What is VAM?
```

## �‍♂️ VAM Testing Guide

### Available Scripts

```bash
# Development server
npm run start

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Generate new component
ng generate component component-name
```

### Code Style
- ESLint configuration for consistent code style
- Prettier for code formatting
- Angular style guide compliance
- TypeScript strict mode enabled

## 🏃‍♂️ VAM Testing Guide

### What is VAM?
VAM (Maximum Aerobic Velocity) is the minimum speed at which your body reaches maximum oxygen uptake (VO2 max). It's a key metric for determining training intensities.

### How to Perform the Test
1. **Warm-up**: 10-15 minutes easy running
2. **Test**: Run at maximum sustainable pace for 5 minutes
3. **Measurement**: Record your average pace and maximum heart rate
4. **Cool-down**: 5-10 minutes easy recovery

### Using the Calculator
- Choose input method (pace or distance)
- Enter your test results
- Add your maximum heart rate
- Generate your personalized training zones

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.