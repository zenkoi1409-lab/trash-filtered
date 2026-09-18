const items = [
  { name: 'newspaper', emoji: '📰', bin: 'paper', label: 'newspaper', rarity: 'common', xp: 10 },
  { name: 'can', emoji: '🥫', bin: 'plastic', label: 'tin can', rarity: 'common', xp: 12 },
  { name: 'apple', emoji: '🍎', bin: 'organic', label: 'apple core', rarity: 'common', xp: 8 },
  { name: 'box', emoji: '📦', bin: 'paper', label: 'shipping box', rarity: 'common', xp: 10 },
  { name: 'bottle', emoji: '🧴', bin: 'plastic', label: 'shampoo bottle', rarity: 'common', xp: 12 },
  { name: 'banana', emoji: '🍌', bin: 'organic', label: 'banana peel', rarity: 'common', xp: 8 },
  { name: 'coffee', emoji: '☕', bin: 'organic', label: 'coffee grounds', rarity: 'common', xp: 9 },
  { name: 'jar', emoji: '🫙', bin: 'plastic', label: 'glass jar', rarity: 'uncommon', xp: 16 },
  { name: 'magazine', emoji: '📖', bin: 'paper', label: 'old magazine', rarity: 'uncommon', xp: 15 },
  { name: 'carton', emoji: '🥛', bin: 'paper', label: 'milk carton', rarity: 'uncommon', xp: 17 },
  { name: 'headphones', emoji: '🎧', bin: 'special', label: 'broken headphones', rarity: 'uncommon', xp: 20 },
  { name: 'battery', emoji: '🔋', bin: 'special', label: 'old battery', rarity: 'rare', xp: 28 },
  { name: 'bulb', emoji: '💡', bin: 'special', label: 'light bulb', rarity: 'rare', xp: 26 },
  { name: 'phone', emoji: '📱', bin: 'special', label: 'retired phone', rarity: 'rare', xp: 34 },
  { name: 'camera', emoji: '📷', bin: 'special', label: 'film camera', rarity: 'rare', xp: 32 },
  { name: 'mushroom', emoji: '🍄', bin: 'organic', label: 'mushroom scraps', rarity: 'uncommon', xp: 16 }
];

const pets = {
  miso: {
    ranger: 'JUNGLE RANGER',
    boost: 'The jungle is cheering for Miso.',
    evolutions: [
      { name: 'Miso', title: 'JUNGLE SCOUT', mood: 'feeling leafy' },
      { name: 'Miso Bloom', title: 'CANOPY RANGER', mood: 'feeling brave' },
      { name: 'Miso Grove', title: 'RAINFOREST GUARDIAN', mood: 'feeling radiant' }
    ]
  },
  clover: {
    ranger: 'ARCTIC RANGER',
    boost: 'Clover sends a cool breeze of gratitude.',
    evolutions: [
      { name: 'Clover', title: 'ICE SCOUT', mood: 'feeling frosty' },
      { name: 'Clover Charm', title: 'AURORA RANGER', mood: 'feeling crisp' },
      { name: 'Clover Crown', title: 'POLAR GUARDIAN', mood: 'feeling radiant' }
    ]
  },
  pebble: {
    ranger: 'OCEAN RANGER',
    boost: 'Pebble is making waves for a cleaner ocean.',
    evolutions: [
      { name: 'Pebble', title: 'TIDE SCOUT', mood: 'feeling fluid' },
      { name: 'Pebble Moss', title: 'REEF RANGER', mood: 'feeling steady' },
      { name: 'Pebble Peak', title: 'OCEAN GUARDIAN', mood: 'feeling mighty' }
    ]
  },
  zuzu: {
    ranger: 'DESERT RANGER',
    boost: 'Zuzu lights up the desert trail.',
    evolutions: [
      { name: 'Zuzu', title: 'DUNE SCOUT', mood: 'feeling warm' },
      { name: 'Zuzu Glow', title: 'OASIS RANGER', mood: 'feeling bright' },
      { name: 'Zuzu Nova', title: 'DESERT GUARDIAN', mood: 'feeling cosmic' }
    ]
  }
};

let xp = 0;
let level = 1;
let combo = 0;
let streak = 0;
let sorted = 0;
let feedCost = 25;
let isMuted = false;
let selectedPet = 'miso';
let selectedVideo = null;

const $ = (id) => document.getElementById(id);
const feedback = $('feedback');

function render() {
  const progress = Math.min(100, (xp % 100));
  const pet = pets[selectedPet];
  const evolutionIndex = Math.min(pet.evolutions.length - 1, level - 1);
  const evolution = pet.evolutions[evolutionIndex];
  $('xp-total').textContent = String(xp).padStart(3, '0');
  $('combo-total').textContent = `x${combo}`;
  $('streak-total').textContent = streak;
  $('level-progress').style.width = `${progress}%`;
  $('level-progress-label').textContent = `${progress} / 100 XP`;
  $('pet-stage-label').textContent = `${pet.ranger} · LV ${level}`;
  $('pet-name').textContent = evolution.name;
  $('pet-mood').textContent = evolution.mood;
  $('pet-blob').className = `pet-blob pet-${selectedPet} evolution-${evolutionIndex + 1}`;
  $('feed-button-label').textContent = `give ${evolution.name} a boost`;
  document.querySelectorAll('.pet-option').forEach((option) => option.classList.toggle('is-selected', option.dataset.pet === selectedPet));
  $('feed-cost').textContent = `${feedCost} XP`;
  $('feed-button').disabled = xp < feedCost;
  $('items-sorted').textContent = `${sorted} video${sorted === 1 ? '' : 's'} shared today`;
}

function setFeedback(message, type = '') {
  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
}

function handleVideoSelect(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('video/')) {
    setFeedback('Please choose a video file to earn XP.', 'bad');
    return;
  }
  selectedVideo = file;
  const preview = $('video-preview');
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
  $('file-label').textContent = 'Choose another video';
  $('video-name').textContent = file.name;
  $('video-duration').textContent = 'Reading duration...';
  $('publish-button').disabled = false;
  preview.onloadedmetadata = () => {
    $('video-duration').textContent = `${Math.round(preview.duration)} sec`;
  };
  setFeedback('Video ready. Publish it to add experience.', 'good');
}

function publishVideo() {
  if (!selectedVideo) return;
  const gained = 25;
  const previousLevel = level;
  xp += gained;
  combo += 1;
  streak += 1;
  sorted += 1;
  selectedVideo = null;
  $('video-input').value = '';
  $('video-preview').hidden = true;
  $('video-preview').removeAttribute('src');
  $('video-preview').load();
  $('file-label').textContent = 'Choose video';
  $('video-name').textContent = 'No video selected';
  $('video-duration').textContent = '';
  $('publish-button').disabled = true;
  if (xp >= previousLevel * 100) {
    level += 1;
    const newEvolution = pets[selectedPet].evolutions[Math.min(level - 1, 2)];
    setFeedback(`LEVEL UP! ${newEvolution.name} is growing brighter. +${gained} XP`, 'good');
  } else {
    setFeedback(`Cleanup shared. Your companion gained +${gained} XP.`, 'good');
  }
  const best = Math.max(xp, Number(localStorage.getItem('sortSproutBest') || 0));
  localStorage.setItem('sortSproutBest', best);
  $('high-score').textContent = `BEST ${String(best).padStart(3, '0')}`;
  render();
}

function feedPet() {
  if (xp < feedCost) return;
  xp -= feedCost;
  feedCost += 10;
  $('pet-blob').animate([{ transform: 'scale(1)' }, { transform: 'scale(1.14) rotate(-4deg)' }, { transform: 'scale(1)' }], { duration: 500, easing: 'ease-out' });
  setFeedback(pets[selectedPet].boost, 'good');
  render();
}

$('video-input').addEventListener('change', handleVideoSelect);
$('publish-button').addEventListener('click', publishVideo);
$('feed-button').addEventListener('click', feedPet);
document.querySelectorAll('.pet-option').forEach((option) => option.addEventListener('click', () => {
  selectedPet = option.dataset.pet;
  render();
  setFeedback(`${pets[selectedPet].evolutions[0].name} is ready to grow.`, 'good');
}));
$('sound-toggle').addEventListener('click', () => {
  isMuted = !isMuted;
  $('sound-toggle').classList.toggle('is-muted', isMuted);
  $('sound-toggle').textContent = isMuted ? '◌' : '◒';
});
$('high-score').textContent = `BEST ${String(Number(localStorage.getItem('sortSproutBest') || 0)).padStart(3, '0')}`;
render();
