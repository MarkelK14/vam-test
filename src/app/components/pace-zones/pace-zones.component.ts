import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IVamData } from '../../interfaces/ivam-data.Interface';
import { IPaceZones } from '../../interfaces/ipace-zones.Interface';

@Component({
  selector: 'app-pace-zones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pace-zones.component.html',
  styleUrl: './pace-zones.component.css'
})
export class PaceZonesComponent {

  @Input() vamData: IVamData = {
    paceMin: null,
    paceSec: null,
    hrMax: null,
  };

  // Training zones configuration based on VAM percentage ranges
  zonesByPace: IPaceZones[] = [
    { 
      zone: 'R0', 
      percMin: 0, 
      percMax: 65,
      description: 'Regenerativo',
      objective: 'Calentamiento y carrera de recuperación'
    },
    { 
      zone: 'R1', 
      percMin: 65, 
      percMax: 75,
      description: 'Por debajo del umbral aeróbico',
      objective: 'Aumentar la capacidad y eficiencia aeróbica'
    },
    { 
      zone: 'R2', 
      percMin: 75, 
      percMax: 85,
      description: 'Entre el umbral aeróbico y anaeróbico',
      objective: 'Aumentar la capacidad de soportar esfuerzos aeróbicos prolongados en condiciones de umbral aeróbico'
    },
    { 
      zone: 'R3', 
      percMin: 90, 
      percMax: 95,
      description: 'Umbral anaeróbico o VO₂max',
      objective: 'Aumentar la capacidad de soportar esfuerzos próximos e iguales al VO₂max'
    },
    { 
      zone: 'R3+', 
      percMin: 100, 
      percMax: 100,
      description: 'Velocidad Aeróbica Máxima (VAM)',
      objective: ''
    },
    { 
      zone: 'R4', 
      percMin: 105, 
      percMax: 120,
      description: 'Capacidad anaeróbica',
      objective: 'Mejorar la tolerancia al lactato'
    },
    { 
      zone: 'R5', 
      percMin: 120, 
      percMax: 140,
      description: 'Potencia anaeróbica láctica',
      objective: 'Mejorar la potencia anaeróbica láctica'
    },
    { 
      zone: 'R6', 
      percMin: 150, 
      percMax: 200,
      description: 'Potencia anaeróbica aláctica',
      objective: 'Mejorar la potencia anaeróbica aláctica'
    },
  ];

  /**
   * Converts VAM percentage to pace object with minutes and seconds
   */
  getPaceFromPercentage(percentage: number): { paceMin: number, paceSec: number } | null {
    if (this.vamData.paceMin === null || this.vamData.paceSec === null) {
      return null;
    }

    const totalSeconds = (this.vamData.paceMin * 60 + this.vamData.paceSec) * (100 / percentage);
    const paceMin = Math.floor(totalSeconds / 60);
    const paceSec = Math.round(totalSeconds % 60);

    return { paceMin, paceSec };
  }

  /**
   * Returns formatted pace (mm:ss) for a given VAM percentage
   */
  getPaceDisplay(percentage: number): string {
    if (!this.vamData.paceMin || !this.vamData.paceSec) {
      return '--:--';
    }

    const paceObj = this.getPaceFromPercentage(percentage);
    if (!paceObj) {
      return '--:--';
    }

    const minutes = paceObj.paceMin;
    const seconds = paceObj.paceSec;
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  /**
   * Returns formatted percentage range for a zone
   */
  getPercentageRange(zone: IPaceZones): string {
    if (zone.percMin === 0) {
      return `< ${zone.percMax}%`;
    }
    if (zone.percMax >= 200) {
      return `> ${zone.percMin}%`;
    }
    if (zone.percMin === zone.percMax) {
      return `${zone.percMin}%`;
    }
    return `${zone.percMin} - ${zone.percMax}%`;
  }

  /**
   * Returns formatted pace range for a zone
   */
  getPaceRange(zone: IPaceZones): string {
    if (!this.vamData.paceMin || !this.vamData.paceSec) {
      return '--:-- - --:--';
    }

    let minPace: string, maxPace: string;

    if (zone.percMax >= 200) {
      // For R6 (>150%), show only from 150%
      return `> ${this.getPaceDisplay(150)}`;
    } else if (zone.percMin === zone.percMax) {
      // For R3+ (100%)
      minPace = maxPace = this.getPaceDisplay(zone.percMin);
    } else if (zone.percMin === 0) {
      // For R0 (<65%)
      return `< ${this.getPaceDisplay(zone.percMax)}`;
    } else {
      // For other zones
      minPace = this.getPaceDisplay(zone.percMax); // Fastest pace (higher percentage)
      maxPace = this.getPaceDisplay(zone.percMin); // Slowest pace (lower percentage)
    }

    return zone.percMin === zone.percMax ? minPace : `${minPace} - ${maxPace}`;
  }

  /**
   * Returns the CSS color class for a zone
   */
  getZoneColor(zoneId: string): string {
    const colors: { [key: string]: string } = {
      'R0': 'bg-gray-400',
      'R1': 'bg-green-400',
      'R2': 'bg-blue-400',
      'R3': 'bg-yellow-400',
      'R3+': 'bg-orange-400',
      'R4': 'bg-red-400',
      'R5': 'bg-purple-400',
      'R6': 'bg-pink-500'
    };
    return colors[zoneId] || 'bg-gray-400';
  }

}
