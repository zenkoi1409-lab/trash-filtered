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
    skills: [
      { name: 'Vine Lash', icon: '🌿', type: 'attack', detail: '10% damage' },
      { name: 'Canopy Mend', icon: '🍃', type: 'heal', detail: 'Heal 5% HP' },
      { name: 'Jungle Roar', icon: '🦁', type: 'stun', detail: 'Skip next turn' },
      { name: 'Root Guard', icon: '🛡️', type: 'defense', detail: '-20% damage' },
      { name: 'Toxic Spores', icon: '☠️', type: 'poison', detail: '10% next turn' }
    ],
    evolutions: [
      { name: 'Miso', title: 'JUNGLE SCOUT', mood: 'feeling leafy' },
      { name: 'Miso Bloom', title: 'CANOPY RANGER', mood: 'feeling brave' },
      { name: 'Miso Grove', title: 'RAINFOREST GUARDIAN', mood: 'feeling radiant' },
      { name: 'Miso Titan', title: 'ANCIENT CANOPY', mood: 'feeling mighty' },
      { name: 'Miso Prime', title: 'WORLDROOT KEEPER', mood: 'feeling legendary' }
    ]
  },
  clover: {
    ranger: 'ARCTIC RANGER',
    boost: 'Clover sends a cool breeze of gratitude.',
    skills: [
      { name: 'Frost Shard', icon: '❄️', type: 'attack', detail: '10% damage' },
      { name: 'Aurora Mend', icon: '🌌', type: 'heal', detail: 'Heal 5% HP' },
      { name: 'Polar Pulse', icon: '🧊', type: 'stun', detail: 'Skip next turn' },
      { name: 'Ice Wall', icon: '🏔️', type: 'defense', detail: '-20% damage' },
      { name: 'Whiteout', icon: '🌨️', type: 'poison', detail: '10% next turn' }
    ],
    evolutions: [
      { name: 'Clover', title: 'ICE SCOUT', mood: 'feeling frosty' },
      { name: 'Clover Charm', title: 'AURORA RANGER', mood: 'feeling crisp' },
      { name: 'Clover Crown', title: 'POLAR GUARDIAN', mood: 'feeling radiant' },
      { name: 'Clover Halo', title: 'ICEFIELD SOVEREIGN', mood: 'feeling mighty' },
      { name: 'Clover Prime', title: 'NORTHSTAR KEEPER', mood: 'feeling legendary' }
    ]
  },
  pebble: {
    ranger: 'OCEAN RANGER',
    boost: 'Pebble is making waves for a cleaner ocean.',
    skills: [
      { name: 'Tidal Pulse', icon: '🌊', type: 'attack', detail: '10% damage' },
      { name: 'Reef Restore', icon: '🪸', type: 'heal', detail: 'Heal 5% HP' },
      { name: 'Sonic Current', icon: '🐋', type: 'stun', detail: 'Skip next turn' },
      { name: 'Coral Shield', icon: '🪸', type: 'defense', detail: '-20% damage' },
      { name: 'Deep Poison', icon: '🦑', type: 'poison', detail: '10% next turn' }
    ],
    evolutions: [
      { name: 'Pebble', title: 'TIDE SCOUT', mood: 'feeling fluid' },
      { name: 'Pebble Moss', title: 'REEF RANGER', mood: 'feeling steady' },
      { name: 'Pebble Peak', title: 'OCEAN GUARDIAN', mood: 'feeling mighty' },
      { name: 'Pebble Surge', title: 'ABYSSAL WARDEN', mood: 'feeling immense' },
      { name: 'Pebble Prime', title: 'BLUE PLANET KEEPER', mood: 'feeling legendary' }
    ]
  },
  zuzu: {
    ranger: 'DESERT RANGER',
    boost: 'Zuzu lights up the desert trail.',
    skills: [
      { name: 'Sand Spark', icon: '✨', type: 'attack', detail: '10% damage' },
      { name: 'Oasis Bloom', icon: '🌵', type: 'heal', detail: 'Heal 5% HP' },
      { name: 'Mirage Trap', icon: '🪞', type: 'stun', detail: 'Skip next turn' },
      { name: 'Dune Armor', icon: '🏜️', type: 'defense', detail: '-20% damage' },
      { name: 'Scorpion Venom', icon: '🦂', type: 'poison', detail: '10% next turn' }
    ],
    evolutions: [
      { name: 'Zuzu', title: 'DUNE SCOUT', mood: 'feeling warm' },
      { name: 'Zuzu Glow', title: 'OASIS RANGER', mood: 'feeling bright' },
      { name: 'Zuzu Nova', title: 'DESERT GUARDIAN', mood: 'feeling cosmic' },
      { name: 'Zuzu Mirage', title: 'DUNE SOVEREIGN', mood: 'feeling immense' },
      { name: 'Zuzu Prime', title: 'SUNLAND KEEPER', mood: 'feeling legendary' }
    ]
  }
};

let profile = JSON.parse(localStorage.getItem('ecoRangerProfile') || 'null');
let xp = profile?.xp || 0;
let level = profile?.level || 1;
let combo = 0;
let streak = 0;
let sorted = profile?.sorted || 0;
let feedCost = profile?.feedCost || 25;
let isMuted = false;
let selectedPet = profile?.selectedPet || 'miso';
let selectedVideo = null;
let room = null;
let roomRole = '';
let battle = null;

const $ = (id) => document.getElementById(id);
const feedback = $('feedback');

function render() {
  const progress = Math.min(100, (xp % 100));
  const pet = pets[selectedPet];
  const evolutionIndex = Math.min(pet.evolutions.length - 1, Math.floor((level - 1) / 2));
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
  renderAccount();
  renderSkills();
  renderBattle();
}

function saveProfile() {
  if (!profile) return;
  profile.xp = xp;
  profile.level = level;
  profile.selectedPet = selectedPet;
  profile.feedCost = feedCost;
  profile.sorted = sorted;
  localStorage.setItem('ecoRangerProfile', JSON.stringify(profile));
}

function renderAccount() {
  $('account-label').textContent = profile?.username || 'Sign in';
  $('account-avatar').textContent = profile?.username?.slice(0, 1).toUpperCase() || '?';
  $('account-title').textContent = profile ? `Welcome back, ${profile.username}` : 'Create your EcoRanger account';
  $('username-input').value = profile?.username || '';
  $('account-logout').hidden = !profile;
}

function renderSkills() {
  const skillGrid = $('skill-grid');
  if (!skillGrid) return;
  const canAct = Boolean(battle && battle.status === 'active' && battle.turn === roomRole);
  skillGrid.innerHTML = pets[selectedPet].skills.map((skill, index) => `<button class="skill-button" type="button" data-skill-index="${index}" ${!canAct ? 'disabled' : ''}><span>${skill.icon}</span><strong>${skill.name}</strong><small>${skill.type.toUpperCase()} · ${skill.detail}</small></button>`).join('');
  skillGrid.querySelectorAll('.skill-button').forEach((button) => button.addEventListener('click', () => useSkill(Number(button.dataset.skillIndex))));
}

function renderBattle() {
  const panel = $('battle-panel');
  panel.hidden = !battle;
  $('room-code-label').textContent = room?.code || '----';
  if (!battle) return;
  const player = roomRole === 'guest' ? battle.guest : battle.host;
  const opponent = roomRole === 'guest' ? battle.host : battle.guest;
  $('player-name').textContent = profile?.username || 'You';
  $('opponent-name').textContent = opponent.name || 'Opponent';
  $('player-hp-label').textContent = `${player.hp}% HP`;
  $('opponent-hp-label').textContent = `${opponent.hp}% HP`;
  $('player-health').style.width = `${player.hp}%`;
  $('opponent-health').style.width = `${opponent.hp}%`;
  $('battle-round').textContent = `TURN ${battle.turnNumber}`;
  $('battle-status').textContent = battle.status === 'active' ? (battle.turn === roomRole ? 'YOUR TURN' : 'OPPONENT TURN') : (battle.winner === roomRole ? 'YOU WIN' : 'YOU LOSE');
  $('battle-log').textContent = battle.log;
}

function setPanelFeedback(id, message, type = '') {
  const element = $(id);
  element.textContent = message;
  element.className = `panel-feedback ${type}`;
}

function createRoom() {
  if (!profile) {
    $('account-panel').hidden = false;
    setPanelFeedback('account-feedback', 'Create a ranger profile before opening a room.', 'bad');
    return;
  }
  const rooms = JSON.parse(localStorage.getItem('ecoRangerRooms') || '{}');
  let code;
  do code = String(Math.floor(1000 + Math.random() * 9000)); while (rooms[code]);
  room = { code, host: profile.username };
  roomRole = 'host';
  battle = { status: 'waiting', turn: 'host', turnNumber: 1, log: 'Room ready. Share the four-digit code with another ranger.', host: { name: profile.username, hp: 100, defending: false, stunned: false, poisoned: false }, guest: { name: '', hp: 100, defending: false, stunned: false, poisoned: false } };
  rooms[code] = { host: profile.username, guest: '', battle };
  localStorage.setItem('ecoRangerRooms', JSON.stringify(rooms));
  setPanelFeedback('room-feedback', `Room ${code} created. Waiting for an opponent.`, 'good');
  render();
}

function joinRoom() {
  if (!profile) {
    $('account-panel').hidden = false;
    setPanelFeedback('account-feedback', 'Create a ranger profile before joining a room.', 'bad');
    return;
  }
  const code = $('room-code-input').value.trim();
  const rooms = JSON.parse(localStorage.getItem('ecoRangerRooms') || '{}');
  const found = rooms[code];
  if (!/^\d{4}$/.test(code) || !found) {
    setPanelFeedback('room-feedback', 'Enter a valid active four-digit room code.', 'bad');
    return;
  }
  if (found.host === profile.username) {
    setPanelFeedback('room-feedback', 'You cannot join your own room.', 'bad');
    return;
  }
  if (found.guest && found.guest !== profile.username) {
    setPanelFeedback('room-feedback', 'That room already has two rangers.', 'bad');
    return;
  }
  room = { code, host: found.host, guest: profile.username };
  roomRole = 'guest';
  battle = found.battle;
  battle.guest = { name: profile.username, hp: 100, defending: false, stunned: false, poisoned: false };
  battle.status = 'active';
  battle.turn = 'host';
  battle.turnNumber = 1;
  battle.log = `${profile.username} joined the arena. ${battle.host.name} goes first.`;
  found.guest = profile.username;
  found.battle = battle;
  rooms[code] = found;
  localStorage.setItem('ecoRangerRooms', JSON.stringify(rooms));
  setPanelFeedback('room-feedback', `Joined room ${code}. Battle started!`, 'good');
  render();
}

function useSkill(skillIndex) {
  if (!battle || battle.status !== 'active' || battle.turn !== roomRole) return;
  const skill = pets[selectedPet].skills[skillIndex];
  const player = roomRole === 'guest' ? battle.guest : battle.host;
  const opponent = roomRole === 'guest' ? battle.host : battle.guest;
  let result = `${profile.username} used ${skill.name}.`;
  if (skill.type === 'attack') {
    applyDamage(opponent, 10);
    result += ' It dealt 10% damage.';
  } else if (skill.type === 'heal') {
    player.hp = Math.min(100, player.hp + 5);
    result += ' You recovered 5% HP.';
  } else if (skill.type === 'stun') {
    opponent.stunned = true;
    result += ' The opponent will lose their next turn.';
  } else if (skill.type === 'defense') {
    player.defending = true;
    result += ' Incoming damage is reduced by 20%.';
  } else if (skill.type === 'poison') {
    opponent.poisoned = true;
    result += ' Poison will deal 10% damage at the opponent\'s next turn.';
  }
  battle.log = result;
  if (opponent.hp <= 0) {
    battle.status = 'finished';
    battle.winner = roomRole;
    profile.wins = (profile.wins || 0) + 1;
    battle.log += ' Victory! The opponent reached 0% HP.';
    saveProfile();
    syncRoom();
    render();
    return;
  }
  battle.turn = roomRole === 'host' ? 'guest' : 'host';
  battle.turnNumber += 1;
  saveProfile();
  syncRoom();
  render();
}

function applyDamage(target, baseDamage) {
  const damage = target.defending ? Math.ceil(baseDamage * .8) : baseDamage;
  target.hp = Math.max(0, target.hp - damage);
  target.defending = false;
}

function processTurnStart() {
  if (!battle || battle.status !== 'active' || battle.turn !== roomRole) return false;
  const player = roomRole === 'guest' ? battle.guest : battle.host;
  if (player.poisoned) {
    applyDamage(player, 10);
    player.poisoned = false;
    battle.log = `${player.name} took 10% poison damage.`;
    if (player.hp <= 0) {
      battle.status = 'finished';
      battle.winner = roomRole === 'host' ? 'guest' : 'host';
      profile.losses = (profile.losses || 0) + 1;
      return true;
    }
  }
  if (player.stunned) {
    player.stunned = false;
    battle.turn = roomRole === 'host' ? 'guest' : 'host';
    battle.turnNumber += 1;
    battle.log = `${player.name} was stunned and lost this turn.`;
    return true;
  }
  return false;
}

function syncRoom() {
  if (!room) return;
  const rooms = JSON.parse(localStorage.getItem('ecoRangerRooms') || '{}');
  if (!rooms[room.code]) return;
  rooms[room.code].battle = battle;
  localStorage.setItem('ecoRangerRooms', JSON.stringify(rooms));
}

function loadRoomFromStorage() {
  if (!room) return;
  const rooms = JSON.parse(localStorage.getItem('ecoRangerRooms') || '{}');
  const stored = rooms[room.code];
  if (!stored) return;
  battle = stored.battle;
  if (processTurnStart()) syncRoom();
  render();
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
    const newEvolution = pets[selectedPet].evolutions[Math.min(Math.floor((level - 1) / 2), 4)];
    setFeedback(`LEVEL UP! ${newEvolution.name} is growing brighter. +${gained} XP`, 'good');
  } else {
    setFeedback(`Cleanup shared. Your companion gained +${gained} XP.`, 'good');
  }
  const best = Math.max(xp, Number(localStorage.getItem('sortSproutBest') || 0));
  localStorage.setItem('sortSproutBest', best);
  $('high-score').textContent = `BEST ${String(best).padStart(3, '0')}`;
  saveProfile();
  render();
}

function feedPet() {
  if (xp < feedCost) return;
  xp -= feedCost;
  feedCost += 10;
  $('pet-blob').animate([{ transform: 'scale(1)' }, { transform: 'scale(1.14) rotate(-4deg)' }, { transform: 'scale(1)' }], { duration: 500, easing: 'ease-out' });
  setFeedback(pets[selectedPet].boost, 'good');
  saveProfile();
  render();
}

$('account-toggle').addEventListener('click', () => {
  $('account-panel').hidden = !$('account-panel').hidden;
});
$('account-save').addEventListener('click', () => {
  const username = $('username-input').value.trim();
  if (username.length < 3) {
    setPanelFeedback('account-feedback', 'Use at least 3 characters for your ranger name.', 'bad');
    return;
  }
  profile = { ...(profile || {}), username, xp, level, selectedPet, feedCost, sorted, wins: profile?.wins || 0, losses: profile?.losses || 0 };
  saveProfile();
  setPanelFeedback('account-feedback', `Profile saved. Welcome, ${username}!`, 'good');
  render();
});
$('account-logout').addEventListener('click', () => {
  profile = null;
  room = null;
  battle = null;
  localStorage.removeItem('ecoRangerProfile');
  setPanelFeedback('account-feedback', 'Profile cleared. Create another ranger name.', 'good');
  render();
});
$('create-room').addEventListener('click', createRoom);
$('join-room').addEventListener('click', joinRoom);
$('video-input').addEventListener('change', handleVideoSelect);
$('publish-button').addEventListener('click', publishVideo);
$('feed-button').addEventListener('click', feedPet);
document.querySelectorAll('.pet-option').forEach((option) => option.addEventListener('click', () => {
  selectedPet = option.dataset.pet;
  saveProfile();
  render();
  setFeedback(`${pets[selectedPet].evolutions[0].name} is ready to grow.`, 'good');
}));
$('sound-toggle').addEventListener('click', () => {
  isMuted = !isMuted;
  $('sound-toggle').classList.toggle('is-muted', isMuted);
  $('sound-toggle').textContent = isMuted ? '◌' : '◒';
});
$('high-score').textContent = `BEST ${String(Number(localStorage.getItem('sortSproutBest') || 0)).padStart(3, '0')}`;
window.addEventListener('storage', (event) => {
  if (event.key === 'ecoRangerRooms') loadRoomFromStorage();
});
render();
