import type { ServiceId } from '../types/service';

export function getAvailabilityUrl(serviceId?: ServiceId) {
  return serviceId
    ? `/consultar-disponibilidad?servicio=${encodeURIComponent(serviceId)}`
    : '/consultar-disponibilidad';
}
