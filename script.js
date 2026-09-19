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
      { name: 'Vine Lash', icon: '🌿', power: 18, detail: 'Steady strike' },
      { name: 'Canopy Guard', icon: '🍃', power: 10, heal: 12, detail: 'Heal + shield' },
      { name: 'Jungle Roar', icon: '🦁', power: 28, detail: 'Heavy strike' }
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
      { name: 'Frost Shard', icon: '❄️', power: 20, detail: 'Sharp strike' },
      { name: 'Aurora Mend', icon: '🌌', power: 8, heal: 16, detail: 'Heal + calm' },
      { name: 'Glacier Crash', icon: '🧊', power: 30, detail: 'Heavy strike' }
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
      { name: 'Tidal Pulse', icon: '🌊', power: 19, detail: 'Flowing strike' },
      { name: 'Reef Restore', icon: '🪸', power: 7, heal: 18, detail: 'Heal + reef' },
      { name: 'Wavebreaker', icon: '🐋', power: 29, detail: 'Heavy strike' }
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
      { name: 'Sand Spark', icon: '✨', power: 17, detail: 'Quick strike' },
      { name: 'Oasis Bloom', icon: '🌵', power: 6, heal: 20, detail: 'Heal + refresh' },
      { name: 'Solar Flare', icon: '☀️', power: 32, detail: 'Heavy strike' }
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
let peer = null;
let peerConnection = null;
let directMatchTimeout = null;

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
  skillGrid.innerHTML = pets[selectedPet].skills.map((skill, index) => `<button class="skill-button" type="button" data-skill-index="${index}" ${!battle || battle.status !== 'active' ? 'disabled' : ''}><span>${skill.icon}</span><strong>${skill.name}</strong><small>${skill.detail} · ${skill.power} DMG</small></button>`).join('');
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
  $('player-hp-label').textContent = `${player.hp} HP`;
  $('opponent-hp-label').textContent = `${opponent.hp} HP`;
  $('player-health').style.width = `${player.hp}%`;
  $('opponent-health').style.width = `${opponent.hp}%`;
  $('battle-round').textContent = `ROUND ${battle.round} / 3`;
  $('battle-status').textContent = battle.status === 'active' ? 'YOUR TURN' : battle.status.toUpperCase();
  $('battle-log').textContent = battle.log;
}

function setPanelFeedback(id, message, type = '') {
  const element = $(id);
  element.textContent = message;
  element.className = `panel-feedback ${type}`;
}

function closePeerConnection() {
  if (directMatchTimeout) {
    clearTimeout(directMatchTimeout);
    directMatchTimeout = null;
  }
  if (peerConnection) peerConnection.close();
  if (peer) peer.destroy();
  peerConnection = null;
  peer = null;
}

function normalizeMatchKey(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 24);
}

function roomPeerId(codeOrName) {
  const key = normalizeMatchKey(codeOrName);
  return key ? `ecoranger-${key}` : 'ecoranger-arena';
}

function sendRoomMessage(message) {
  if (peerConnection?.open) peerConnection.send(message);
}

function sendRoomState() {
  sendRoomMessage({ type: 'state', room, battle });
}

function registerHostConnection(connection) {
  if (peerConnection && peerConnection !== connection) {
    connection.close();
    return;
  }
  peerConnection = connection;
  connection.on('data', (message) => {
    if (message?.type === 'ping') {
      connection.send({ type: 'pong', username: profile.username });
      return;
    }
    if (message?.type === 'pong') {
      setPanelFeedback('room-feedback', `${message.username || 'Ranger'} is online and ready to battle.`, 'good');
      return;
    }
    if (message?.type === 'join') {
      battle.guest = { name: message.username, hp: 100 };
      battle.status = 'active';
      battle.log = `${message.username} joined the arena. Choose a skill.`;
      sendRoomState();
      render();
    } else if (message?.type === 'action') {
      applySkillForRole('guest', message.pet || 'miso', message.skillIndex);
      sendRoomState();
      render();
    }
  });
  connection.on('close', () => {
    peerConnection = null;
    if (battle?.status === 'active') {
      battle.status = 'waiting';
      battle.guest = { name: '', hp: 100 };
      battle.log = 'Opponent disconnected. Waiting for another ranger.';
      render();
    }
  });
}

function registerGuestConnection(connection, code) {
  peerConnection = connection;
  const confirmationTimeout = () => {
    if (peerConnection === connection && battle === null) {
      setPanelFeedback('room-feedback', `${code} is not online right now. Try another ranger name.`, 'bad');
      connection.close();
    }
  };
  if (directMatchTimeout) clearTimeout(directMatchTimeout);
  directMatchTimeout = setTimeout(confirmationTimeout, 4000);
  connection.on('open', () => {
    connection.send({ type: 'ping', username: profile.username });
    setPanelFeedback('room-feedback', `Connecting to ${code}...`, 'good');
  });
  connection.on('data', (message) => {
    if (message?.type === 'pong') {
      clearTimeout(directMatchTimeout);
      directMatchTimeout = null;
      connection.send({ type: 'join', username: profile.username });
      setPanelFeedback('room-feedback', `Connected to ${code}. Waiting for the battle state.`, 'good');
      return;
    }
    if (message?.type === 'state') {
      room = message.room;
      roomRole = 'guest';
      battle = message.battle;
      render();
    }
    if (message?.type === 'error') setPanelFeedback('room-feedback', message.message, 'bad');
  });
  connection.on('close', () => {
    if (directMatchTimeout) {
      clearTimeout(directMatchTimeout);
      directMatchTimeout = null;
    }
    setPanelFeedback('room-feedback', 'The room connection closed.', 'bad');
  });
}

function createRoom() {
  if (!profile) {
    $('account-panel').hidden = false;
    setPanelFeedback('account-feedback', 'Create a ranger profile before opening a direct match.', 'bad');
    return;
  }
  if (typeof Peer === 'undefined') {
    setPanelFeedback('room-feedback', 'Online match is unavailable because the connection service did not load.', 'bad');
    return;
  }
  closePeerConnection();
  const matchKey = normalizeMatchKey(profile.username);
  if (!matchKey) {
    setPanelFeedback('room-feedback', 'Choose a valid ranger name before opening a direct match.', 'bad');
    return;
  }
  room = { code: profile.username, host: profile.username };
  roomRole = 'host';
  battle = { status: 'waiting', round: 1, log: 'Direct match ready. Share your ranger name with another ranger.', host: { name: profile.username, hp: 100 }, guest: { name: '', hp: 100 } };
  peer = new Peer(roomPeerId(profile.username));
  peer.on('open', () => setPanelFeedback('room-feedback', `Direct match opened for ${profile.username}. Tell another ranger to challenge this name.`, 'good'));
  peer.on('connection', registerHostConnection);
  peer.on('error', () => setPanelFeedback('room-feedback', 'Could not open the direct match. Try again.', 'bad'));
  render();
}

function joinRoom() {
  if (!profile) {
    $('account-panel').hidden = false;
    setPanelFeedback('account-feedback', 'Create a ranger profile before challenging another ranger.', 'bad');
    return;
  }
  const targetName = $('room-code-input').value.trim();
  $('room-code-input').value = targetName;
  if (!targetName) {
    setPanelFeedback('room-feedback', 'Enter the other ranger name to challenge them directly.', 'bad');
    return;
  }
  const targetKey = normalizeMatchKey(targetName);
  if (targetKey === normalizeMatchKey(profile.username)) {
    setPanelFeedback('room-feedback', 'You cannot challenge yourself. Choose another ranger name.', 'bad');
    return;
  }
  if (typeof Peer === 'undefined') {
    setPanelFeedback('room-feedback', 'Online match is unavailable because the connection service did not load.', 'bad');
    return;
  }
  closePeerConnection();
  room = { code: targetName, host: '', guest: profile.username };
  roomRole = 'guest';
  battle = null;
  peer = new Peer();
  peer.on('open', () => {
    const connection = peer.connect(roomPeerId(targetName), { reliable: true });
    connection.on('error', () => {
      if (directMatchTimeout) clearTimeout(directMatchTimeout);
      setPanelFeedback('room-feedback', `${targetName} is not online right now. Try another ranger name.`, 'bad');
    });
    registerGuestConnection(connection, targetName);
  });
  peer.on('error', () => setPanelFeedback('room-feedback', 'That ranger is not online or the match could not be opened.', 'bad'));
  setPanelFeedback('room-feedback', `Challenging ${targetName}...`, 'good');
  render();
}

function useSkill(skillIndex) {
  if (!battle || battle.status !== 'active') return;
  if (roomRole === 'guest') {
    sendRoomMessage({ type: 'action', pet: selectedPet, skillIndex });
    return;
  }
  applySkillForRole('host', selectedPet, skillIndex);
  sendRoomState();
  render();
}

function applySkillForRole(role, petKey, skillIndex) {
  if (!battle || battle.status !== 'active') return;
  const skill = pets[petKey].skills[skillIndex];
  const player = role === 'guest' ? battle.guest : battle.host;
  const opponent = role === 'guest' ? battle.host : battle.guest;
  const actorName = player.name || petKey;
  opponent.hp = Math.max(0, opponent.hp - skill.power);
  player.hp = Math.min(100, player.hp + (skill.heal || 0));
  battle.log = `${actorName} used ${skill.name}: ${skill.power} damage${skill.heal ? ` and recovered ${skill.heal} HP` : ''}.`;
  if (opponent.hp <= 0) {
    battle.status = 'victory';
    battle.winner = role;
    if (role === roomRole) profile.wins = (profile.wins || 0) + 1;
    battle.log += ' Victory! The arena is cleaner already.';
    return;
  }
  const counterRole = role === 'guest' ? 'host' : 'guest';
  const counter = pets[role === 'guest' ? 'miso' : 'pebble'].skills[(battle.round - 1) % 3];
  player.hp = Math.max(0, player.hp - Math.max(8, counter.power - 5));
  battle.round += 1;
  if (player.hp <= 0 || battle.round > 3) {
    battle.status = player.hp > 0 ? 'victory' : 'defeat';
    battle.winner = player.hp > 0 ? role : counterRole;
    if (battle.winner === roomRole) profile.wins = (profile.wins || 0) + 1;
    if (battle.winner !== roomRole) profile.losses = (profile.losses || 0) + 1;
    battle.log += player.hp > 0 ? ' Three rounds complete. You win on points!' : ' Your ranger needs a recharge.';
  } else {
    battle.log += ` Opponent countered with ${counter.name}.`;
  }
  if (role === roomRole) saveProfile();
}

function syncRoom() {
  sendRoomState();
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
render();
