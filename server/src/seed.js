import 'dotenv/config';
import mongoose from 'mongoose';
import { ShopItem } from './models.js';

const items = [
  { name: 'Berry Snack', description: 'A sweet little treat for your pet.', category: 'food', price: 5, emoji: '🍓' },
  { name: 'Crunchy Biscuit', description: 'A tasty snack after a productive day.', category: 'food', price: 8, emoji: '🍪' },
  { name: 'Yarn Ball', description: 'A playful toy for happy moments.', category: 'toy', price: 20, emoji: '🧶' },
  { name: 'Tiny Bell', description: 'A little jingle for your companion.', category: 'accessory', price: 35, emoji: '🔔' },
  { name: 'Flower Crown', description: 'A soft floral accessory.', category: 'accessory', price: 50, emoji: '🌼' },
  { name: 'Star Pillow', description: 'A cozy place to rest.', category: 'toy', price: 25, emoji: '⭐' },
  { name: 'Magic Hat', description: 'A tiny hat with big personality.', category: 'accessory', price: 65, emoji: '🎩' }
];
try {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/petpal');
  for (const item of items) await ShopItem.updateOne({ name: item.name }, { $set: item }, { upsert: true });
  console.log(`Seeded ${items.length} shop items.`);
} catch (e) { console.error(e); process.exitCode = 1; }
finally { await mongoose.disconnect(); }
