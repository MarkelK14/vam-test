import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IVamData } from '../../interfaces/ivam-data.Interface';
import { IHeartRateZones } from '../../interfaces/iheart-rate-zones.Interface';

@Component({
  selector: 'app-heart-rate-zones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heart-rate-zones.component.html',
  styleUrl: './heart-rate-zones.component.css'
})
export class HeartRateZonesComponent {

  @Input() vamData: IVamData = {
    paceMin: null,
    paceSec: null,
    hrMax: null,
  };

  // Heart rate zones configuration based on FC max percentage ranges
  zonesByHeartRate: IHeartRateZones[] = [
    { 
      zone: 'Z1', 
      percMin: 0, 
      percMax: 70,
      description: 'Recovery',
      objective: 'Calentamiento y carrera de recuperación'
    },
    { 
      zone: 'Z2', 
      percMin: 70, 
      percMax: 80,
      description: 'Endurance - Resistencia Aeróbica',
      objective: 'Fondo y resistencia básica. Construcción de base aeróbica'
    },
    { 
      zone: 'Z3', 
      percMin: 80, 
      percMax: 87,
      description: 'Tempo - Potencia aeróbica',
      objective: 'Ritmo sostenido. Aumentar la potencia aeróbica'
    },
    { 
      zone: 'Z4', 
      percMin: 87, 
      percMax: 92,
      description: 'Umbral',
      objective: 'Ritmo de competición. Mejorar el umbral de lactato'
    },
    { 
      zone: 'Z5', 
      percMin: 92, 
      percMax: 100,
      description: 'VO₂max',
      objective: 'Maximizar la capacidad aeróbica (VO₂max)'
    },
  ];

  /**
   * Calculates heart rate from percentage of max HR
   */
  getHeartRateFromPercentage(percentage: number): number | null {
    if (!this.vamData.hrMax) {
      return null;
    }
    return Math.round((this.vamData.hrMax * percentage) / 100);
  }

  /**
   * Returns formatted percentage range for a zone
   */
  getPercentageRange(zone: IHeartRateZones): string {
    if (zone.percMin === 0) {
      return `< ${zone.percMax}%`;
    }
    if (zone.percMax >= 100) {
      return `${zone.percMin} - ${zone.percMax}%`;
    }
    return `${zone.percMin} - ${zone.percMax}%`;
  }

  /**
   * Returns formatted heart rate range for a zone
   */
  getHeartRateRange(zone: IHeartRateZones): string {
    if (!this.vamData.hrMax) {
      return '--- - ---';
    }

    if (zone.percMin === 0) {
      // For Z1 (<70%)
      const maxHR = this.getHeartRateFromPercentage(zone.percMax);
      return `< ${maxHR}`;
    } else {
      // For other zones
      const minHR = this.getHeartRateFromPercentage(zone.percMin);
      const maxHR = this.getHeartRateFromPercentage(zone.percMax);
      return `${minHR} - ${maxHR}`;
    }
  }

  /**
   * Returns the CSS color class for a heart rate zone
   */
  getZoneColor(zoneId: string): string {
    const colors: { [key: string]: string } = {
      'Z1': 'bg-blue-400',
      'Z2': 'bg-green-400',
      'Z3': 'bg-yellow-400',
      'Z4': 'bg-orange-400',
      'Z5': 'bg-red-500'
    };
    return colors[zoneId] || 'bg-gray-400';
  }

}
