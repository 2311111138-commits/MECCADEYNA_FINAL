/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CatalogItem {
  id: string;
  category: "Gamis" | "Muslim Wear" | "Dailywear";
  title: string;
  description: string;
  image: string;
  highlights: string[];
  fabrics: string[];
}

export interface Fabric {
  id: string;
  name: string;
  type: "Rayon" | "Katun";
  description: string;
  character: string; // draping, thickness, breathability
  feel: string;
  tags: string[];
  colorHexList: string[];
}

export interface ProductionStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
}

export interface GalleryItem {
  id: string;
  category: "gamis" | "muslim-wear" | "dailywear" | "proses" | "jahitan" | "packing";
  title: string;
  image: string;
}

export interface ConsultationState {
  category: string;
  fabric: string;
  quantity: number;
  brandName: string;
  ownerName: string;
  notes: string;
}
