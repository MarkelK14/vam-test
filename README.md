# 🏃‍♂️ VAM Test Calculator

A comprehensive Angular application for calculating personalized running training zones based on VAM (Maximum Aerobic Velocity) test results. Generate both pace and heart rate zones with professional accuracy.

![Angular](https://img.shields.io/badge/Angular-19.1.5-red?logo=angular)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-blue?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?logo=typescript)
![NgxSonner](https://img.shields.io/badge/NgxSonner-Latest-green?logo=angular)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 About

The VAM Test Calculator is a professional-grade tool that helps runners and coaches determine optimal training zones through scientific VAM (Maximum Aerobic Velocity) analysis. Built with modern web technologies, it provides accurate, personalized training recommendations.

**Key Benefits:**
- **Dual Zone Calculation**: Generate both pace zones (R0-R6) and heart rate zones (Z1-Z5)
- **Scientific Accuracy**: Based on established sports science protocols
- **Flexible Input**: Support for both pace and distance measurement methods
- **Educational Resources**: Comprehensive VAM testing guide and methodology
- **Professional Results**: Export-ready training zone tables
- **Cross-Platform**: Works seamlessly on desktop, tablet, and mobile devices

## ✨ Features

### 🎯 Training Zone Calculation
- **Pace Zones (R0-R6)**: Complete running pace zones based on VAM percentages
  - R0: Recovery (< 65% VAM)
  - R1: Aerobic Base (65-75% VAM)  
  - R2: Aerobic Threshold (75-85% VAM)
  - R3: Anaerobic Threshold (90-95% VAM)
  - R3+: VAM Intensity (100% VAM)
  - R4: Anaerobic Capacity (105-120% VAM)
  - R5: Anaerobic Power (120-140% VAM)
  - R6: Alactic Power (>150% VAM)

- **Heart Rate Zones (Z1-Z5)**: Scientifically accurate HR zones
  - Z1: Recovery (< 70% HR max)
  - Z2: Endurance (70-80% HR max)
  - Z3: Tempo (80-87% HR max)  
  - Z4: Threshold (87-92% HR max)
  - Z5: VO₂max (92-100% HR max)

### 📊 Data Input Methods
- **By Pace**: Enter min/km rhythm from your VAM test
- **By Distance**: Enter meters covered in 5-minute test
- **HR Integration**: Maximum heart rate from test session
- **Automatic Conversion**: Seamless switching between input methods

### 🎨 User Experience
- **Modern Interface**: Clean, professional design with intuitive navigation
- **Educational Content**: Built-in VAM testing guide and methodology
- **Real-time Validation**: Instant feedback and error prevention
- **Responsive Layout**: Optimized for all device types and screen sizes
- **Toast Notifications**: User-friendly success and error messages
- **Progressive Enhancement**: Works without JavaScript fallback

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.13+ (LTS recommended)
- **npm** 9+ or **yarn** 1.22+
- **Angular CLI** 19+ (`npm install -g @angular/cli`)

### Installation

1. **Clone and navigate**
   ```bash
   git clone https://github.com/MarkelK14/vam-test.git
   cd vam-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open application**
   Navigate to `http://localhost:4200/`

## 🏗️ Project Architecture

```
src/
├── app/
│   ├── components/
│   │   ├── hero/                    # Landing section with CTA
│   │   ├── vam-result-form/         # Dual-mode input form
│   │   ├── pace-zones/              # R0-R6 pace training zones
│   │   ├── heart-rate-zones/        # Z1-Z5 heart rate zones
│   │   └── vam-info-modal/          # Educational VAM guide
│   ├── interfaces/
│   │   ├── ivam-data.interface.ts   # VAM test data structure
│   │   ├── ipace-zones.interface.ts # Pace zone definitions
│   │   └── iheart-rate-zones.interface.ts # HR zone definitions
│   ├── services/
│   │   └── modal.service.ts         # Reactive modal management
│   ├── app.component.*              # Root component with data flow
│   └── app.config.ts                # Application configuration
├── styles.css                       # Global styles & font imports
├── index.html                       # Main HTML template
└── public/                          # Static assets
    ├── favicon.ico
    └── og-image.webp               # Social media preview
```

## 🏃‍♂️ What is VAM?

### Understanding VAM
**VAM (Maximum Aerobic Velocity)** represents the minimum running speed at which your body reaches maximum oxygen consumption (VO₂max). It serves as the cornerstone for scientific training zone calculation and periodization planning.

## 🤝 Contributing

Contributions are welcome! This project follows standard open-source contribution practices:

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for full details.