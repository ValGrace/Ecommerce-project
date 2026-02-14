import { useState } from 'react';
import { Search, SlidersHorizontal, Heart, ChevronDown, X } from 'lucide-react';
// import { Slider } from './slider';
const products = [
    {
    id: 1,
    name: 'ProSound Elite',
    description: 'Premium noise cancellation',
    price: 299,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBibGFja3xlbnwxfHx8fDE3NzEwMzYyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'M',
    tags: ['luxury', 'wireless']
  },
  {
    id: 2,
    name: 'AirBuds Pro Max',
    description: 'True wireless freedom',
    price: 249,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzcxMDYwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'S',
    tags: ['luxury', 'wireless']
  },
  {
    id: 3,
    name: 'GameZone Xtreme',
    description: 'Immersive gaming audio',
    price: 189,
    image: 'https://images.unsplash.com/photo-1629429407756-4a7703614972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkc2V0fGVufDF8fHx8MTc3MDk5MDcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'L',
    tags: ['gaming', 'wireless']
  },
  {
    id: 4,
    name: 'Studio Master 500',
    description: 'Professional audio mixing',
    price: 449,
    image: 'https://images.unsplash.com/photo-1718217028088-a23cb3b277c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc3MTA3Nzk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'L',
    tags: ['luxury', 'professional']
  },
  {
    id: 5,
    name: 'SoundWave Elite',
    description: 'Audiophile-grade clarity',
    price: 379,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBibGFja3xlbnwxfHx8fDE3NzEwMzYyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'M',
    tags: ['luxury', 'premium']
  },
  {
    id: 6,
    name: 'BassPro Wireless',
    description: 'Deep bass technology',
    price: 199,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzcxMDYwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'S',
    tags: ['wireless']
  },
  {
    id: 7,
    name: 'UltraSound HD',
    description: 'High-definition audio',
    price: 329,
    image: 'https://images.unsplash.com/photo-1629429407756-4a7703614972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkc2V0fGVufDF8fHx8MTc3MDk5MDcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'M',
    tags: ['premium']
  },
  {
    id: 8,
    name: 'AeroSound ANC',
    description: 'Active noise control',
    price: 279,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBibGFja3xlbnwxfHx8fDE3NzEwMzYyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'M',
    tags: ['wireless']
  },
  {
    id: 9,
    name: 'Quantum Audio Q7',
    description: 'Spatial audio experience',
    price: 399,
    image: 'https://images.unsplash.com/photo-1718217028088-a23cb3b277c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc3MTA3Nzk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'L',
    tags: ['luxury', 'premium']
  },
  {
    id: 10,
    name: 'CrystalClear Buds',
    description: 'Crystal-clear sound',
    price: 159,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzcxMDYwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Premium Audio',
    size: 'S',
    tags: ['wireless']
  },

  // Wearable Tech (10 products)
  {
    id: 11,
    name: 'SmartFit Watch Pro',
    description: 'Advanced health tracking',
    price: 399,
    image: 'https://images.unsplash.com/photo-1669049358893-9a727252b5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwZGV2aWNlfGVufDF8fHx8MTc3MTA2MjkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'S',
    tags: ['premium']
  },
  {
    id: 12,
    name: 'FitTrack Elite',
    description: 'Comprehensive fitness metrics',
    price: 249,
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlcnxlbnwxfHx8fDE3NzEwMTAwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'S',
    tags: ['wireless']
  },
  {
    id: 13,
    name: 'VisionX Smart Glasses',
    description: 'AR-enabled eyewear',
    price: 599,
    image: 'https://images.unsplash.com/photo-1562330744-0e81c1e9dd88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGdsYXNzZXN8ZW58MXx8fHwxNzcxMDc3OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'M',
    tags: ['luxury', 'premium']
  },
  {
    id: 14,
    name: 'MetaVerse VR Pro',
    description: 'Next-gen virtual reality',
    price: 799,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXR8ZW58MXx8fHwxNzcxMDc3OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'L',
    tags: ['luxury', 'gaming']
  },
  {
    id: 15,
    name: 'HealthPulse Band',
    description: '24/7 health monitoring',
    price: 179,
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlcnxlbnwxfHx8fDE3NzEwMTAwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'S',
    tags: ['wireless']
  },
  {
    id: 16,
    name: 'ActiveWatch Sport',
    description: 'Rugged sports tracking',
    price: 299,
    image: 'https://images.unsplash.com/photo-1669049358893-9a727252b5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwZGV2aWNlfGVufDF8fHx8MTc3MTA2MjkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'M',
    tags: ['premium']
  },
  {
    id: 17,
    name: 'Immerse VR Gaming',
    description: 'Ultimate VR gaming',
    price: 899,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXR8ZW58MXx8fHwxNzcxMDc3OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'L',
    tags: ['luxury', 'gaming']
  },
  {
    id: 18,
    name: 'SmartView AR',
    description: 'Augmented reality display',
    price: 699,
    image: 'https://images.unsplash.com/photo-1562330744-0e81c1e9dd88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGdsYXNzZXN8ZW58MXx8fHwxNzcxMDc3OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'M',
    tags: ['luxury']
  },
  {
    id: 19,
    name: 'PulseFit Tracker',
    description: 'Heart rate & sleep tracking',
    price: 129,
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlcnxlbnwxfHx8fDE3NzEwMTAwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'S',
    tags: ['wireless']
  },
  {
    id: 20,
    name: 'EliteWatch Ultra',
    description: 'Premium smartwatch',
    price: 549,
    image: 'https://images.unsplash.com/photo-1669049358893-9a727252b5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwZGV2aWNlfGVufDF8fHx8MTc3MTA2MjkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wearable Tech',
    size: 'M',
    tags: ['luxury', 'premium']
  },

  // Portable Audio (10 products)
  {
    id: 21,
    name: 'BassWave Speaker',
    description: '360° surround sound',
    price: 179,
    image: 'https://images.unsplash.com/photo-1675319245480-215961c129f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwcG9ydGFibGV8ZW58MXx8fHwxNzcwOTgzNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'M',
    tags: ['wireless']
  },
  {
    id: 22,
    name: 'SoundPod Mini',
    description: 'Compact powerful audio',
    price: 99,
    image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHNwZWFrZXJ8ZW58MXx8fHwxNzcxMDc3OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'S',
    tags: ['wireless']
  },
  {
    id: 23,
    name: 'UltraBar Soundbar',
    description: 'Cinema-quality audio',
    price: 349,
    image: 'https://images.unsplash.com/photo-1604914416956-38b08c516877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZGJhciUyMGF1ZGlvfGVufDF8fHx8MTc3MTA3Nzk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'XL',
    tags: ['premium']
  },
  {
    id: 24,
    name: 'PartyBoom XL',
    description: 'Maximum volume output',
    price: 229,
    image: 'https://images.unsplash.com/photo-1675319245480-215961c129f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwcG9ydGFibGV8ZW58MXx8fHwxNzcwOTgzNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'L',
    tags: ['wireless']
  },
  {
    id: 25,
    name: 'AquaSound Pro',
    description: 'Waterproof speaker',
    price: 149,
    image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHNwZWFrZXJ8ZW58MXx8fHwxNzcxMDc3OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'S',
    tags: ['wireless']
  },
  {
    id: 26,
    name: 'HomeBar Theater',
    description: 'Dolby Atmos soundbar',
    price: 499,
    image: 'https://images.unsplash.com/photo-1604914416956-38b08c516877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZGJhciUyMGF1ZGlvfGVufDF8fHx8MTc3MTA3Nzk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'XL',
    tags: ['luxury', 'premium']
  },
  {
    id: 27,
    name: 'BeatBox Pulse',
    description: 'LED rhythm lights',
    price: 189,
    image: 'https://images.unsplash.com/photo-1675319245480-215961c129f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwcG9ydGFibGV8ZW58MXx8fHwxNzcwOTgzNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'M',
    tags: ['wireless']
  },
  {
    id: 28,
    name: 'TravelTunes Micro',
    description: 'Ultra-portable audio',
    price: 79,
    image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHNwZWFrZXJ8ZW58MXx8fHwxNzcxMDc3OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'S',
    tags: ['wireless']
  },
  {
    id: 29,
    name: 'CinemaSound Bar',
    description: 'Virtual surround sound',
    price: 399,
    image: 'https://images.unsplash.com/photo-1604914416956-38b08c516877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZGJhciUyMGF1ZGlvfGVufDF8fHx8MTc3MTA3Nzk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'XL',
    tags: ['premium']
  },
  {
    id: 30,
    name: 'OutdoorBlast Pro',
    description: 'Rugged outdoor speaker',
    price: 199,
    image: 'https://images.unsplash.com/photo-1675319245480-215961c129f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBzcGVha2VyJTIwcG9ydGFibGV8ZW58MXx8fHwxNzcwOTgzNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Portable Audio',
    size: 'M',
    tags: ['wireless']
  },

  // Computing (10 products)
  {
    id: 31,
    name: 'UltraBook Pro X',
    description: 'Power meets portability',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1642551123019-00407c2c2a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2h8ZW58MXx8fHwxNzcwOTc3NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'L',
    tags: ['luxury', 'professional']
  },
  {
    id: 32,
    name: 'PowerStation Desktop',
    description: 'Ultimate workstation power',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzcxMDc3OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'XL',
    tags: ['luxury', 'professional']
  },
  {
    id: 33,
    name: 'RGB Gaming Keys',
    description: 'Mechanical precision',
    price: 149,
    image: 'https://images.unsplash.com/photo-1645802106095-765b7e86f5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMHJnYnxlbnwxfHx8fDE3NzEwNjE3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'L',
    tags: ['gaming']
  },
  {
    id: 34,
    name: 'StreamCam 4K Pro',
    description: 'Professional streaming',
    price: 199,
    image: 'https://images.unsplash.com/photo-1726463276806-63a1e75ccb66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJjYW0lMjBjb21wdXRlcnxlbnwxfHx8fDE3NzEwNzc5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'M',
    tags: ['professional']
  },
  {
    id: 35,
    name: 'MechaMaster Keys',
    description: 'Cherry MX switches',
    price: 189,
    image: 'https://images.unsplash.com/photo-1626958390898-162d3577f293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmR8ZW58MXx8fHwxNzcxMDU3NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'L',
    tags: ['gaming']
  },
  {
    id: 36,
    name: 'ProGamer Mouse',
    description: '20K DPI precision',
    price: 89,
    image: 'https://images.unsplash.com/photo-1628832307345-7404b47f1751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb3VzZXxlbnwxfHx8fDE3NzEwMDkwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'S',
    tags: ['gaming']
  },
  {
    id: 37,
    name: 'FlexBook Air',
    description: 'Ultra-thin laptop',
    price: 999,
    image: 'https://images.unsplash.com/photo-1642551123019-00407c2c2a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2h8ZW58MXx8fHwxNzcwOTc3NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'M',
    tags: ['premium']
  },
  {
    id: 38,
    name: 'WorkStation Elite',
    description: 'Professional workstation',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzcxMDc3OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'XL',
    tags: ['luxury', 'professional']
  },
  {
    id: 39,
    name: 'TactileKeys Pro',
    description: 'Wireless mechanical',
    price: 169,
    image: 'https://images.unsplash.com/photo-1626958390898-162d3577f293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmR8ZW58MXx8fHwxNzcxMDU3NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'L',
    tags: ['wireless']
  },
  {
    id: 40,
    name: 'HD Conference Cam',
    description: 'Meeting room solution',
    price: 299,
    image: 'https://images.unsplash.com/photo-1726463276806-63a1e75ccb66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJjYW0lMjBjb21wdXRlcnxlbnwxfHx8fDE3NzEwNzc5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Computing',
    size: 'M',
    tags: ['professional']
  },

  // Mobile Devices (10 products)
  {
    id: 41,
    name: 'Nexus Smartphone',
    description: '5G enabled powerhouse',
    price: 899,
    image: 'https://images.unsplash.com/photo-1646719223599-9864b351e242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwZGV2aWNlfGVufDF8fHx8MTc3MTA1MDUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'M',
    tags: ['premium']
  },
  {
    id: 42,
    name: 'ProPhone Ultra',
    description: 'Flagship performance',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYW5kcm9pZHxlbnwxfHx8fDE3NzEwNzc5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'M',
    tags: ['luxury', 'premium']
  },
  {
    id: 43,
    name: 'FlexTab Pro',
    description: 'Productivity tablet',
    price: 699,
    image: 'https://images.unsplash.com/photo-1769603795371-ad63bd85d524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzcxMDA3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'L',
    tags: ['professional']
  },
  {
    id: 44,
    name: 'ArmorCase Pro',
    description: 'Military-grade protection',
    price: 49,
    image: 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MXx8fHwxNzcwOTgxNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'M',
    tags: []
  },
  {
    id: 45,
    name: 'PowerBank Max',
    description: '30000mAh capacity',
    price: 89,
    image: 'https://images.unsplash.com/photo-1766639214202-7eab6e6d1c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmslMjBjaGFyZ2VyfGVufDF8fHx8MTc3MDk4MDAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'S',
    tags: []
  },
  {
    id: 46,
    name: 'Galaxy Phone X',
    description: 'Foldable innovation',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1646719223599-9864b351e242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwZGV2aWNlfGVufDF8fHx8MTc3MTA1MDUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'L',
    tags: ['luxury', 'premium']
  },
  {
    id: 47,
    name: 'CreativeTab Air',
    description: 'Drawing & design tablet',
    price: 549,
    image: 'https://images.unsplash.com/photo-1769603795371-ad63bd85d524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzcxMDA3MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'L',
    tags: ['professional']
  },
  {
    id: 48,
    name: 'SlimCase Ultra',
    description: 'Minimalist protection',
    price: 39,
    image: 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2V8ZW58MXx8fHwxNzcwOTgxNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'M',
    tags: []
  },
  {
    id: 49,
    name: 'ChargePod Wireless',
    description: 'Fast wireless charging',
    price: 69,
    image: 'https://images.unsplash.com/photo-1766639214202-7eab6e6d1c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmslMjBjaGFyZ2VyfGVufDF8fHx8MTc3MDk4MDAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'S',
    tags: ['wireless']
  },
  {
    id: 50,
    name: 'Quantum Phone 5G',
    description: 'Next-gen connectivity',
    price: 799,
    image: 'https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYW5kcm9pZHxlbnwxfHx8fDE3NzEwNzc5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile Devices',
    size: 'M',
    tags: ['premium']
  }
]

const categories = [
  { name: 'Premium Audio', count: 28 },
  { name: 'Wearable Tech', count: 45 },
  { name: 'Gaming', count: 34 },
  { name: 'Computing', count: 67 },
  { name: 'Mobile Devices', count: 52 }
];

export function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState('Premium Audio');
  const [priceRange, setPriceRange] = useState([50, 1000000]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [wishlist, setWishlist] = useState([]);
  const [activeFilters, setActiveFilters] = useState(['Price range: $50 - 1500', 'Size: Medium', 'Luxury']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const removeFilter = (filter) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedSize && product.size !== selectedSize) return false;
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="bg-[#D88373] min-h-screen py-12">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-[#141414] rounded-lg p-6 sticky top-6">
              {/* Filters Header */}
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-white" />
                <h2 className="text-white font-semibold">Filters</h2>
              </div>

              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00D991]"
                />
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-[#BD1E1E] text-xs uppercase tracking-wider mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                        selectedCategory === category.name
                          ? 'text-white bg-[#1A1A1A]'
                          : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                      }`}
                    >
                      <span className="text-sm">
                        {selectedCategory === category.name && '• '}
                        {category.name}
                      </span>
                      <span className="text-xs text-gray-600">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Price</h3>
                {/* <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={2000}
                  step={50}
                  className="mb-4"
                /> */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <span className="text-white">{priceRange[0]}</span>
                  </div>
                  <span className="text-gray-600">-</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <span className="text-white">{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-4">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'bg-white text-black'
                          : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-white text-4xl font-bold mb-6">{selectedCategory}</h1>

              {/* Active Filters */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 flex-wrap">
                  {activeFilters.map((filter, index) => (
                    <div
                      key={index}
                      className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
                    >
                      <span>{filter}</span>
                      <button
                        onClick={() => removeFilter(filter)}
                        className="hover:text-[#00D991] transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                    Default Sorting
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                    Categories
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#141414] rounded-xl overflow-hidden group hover:bg-[#1A1A1A] transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#1A1A1A]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-all"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          wishlist.includes(product.id)
                            ? 'fill-[#00D991] text-[#00D991]'
                            : 'text-white'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{product.name}</h3>
                        <p className="text-gray-400 text-sm">{product.description}</p>
                      </div>
                      <div className="text-white font-bold ml-4">${product.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#BD1E1E] text-lg">No products found matching your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
