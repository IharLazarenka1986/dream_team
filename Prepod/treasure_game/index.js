const map = document.getElementById("map");
const treasure = document.getElementById("treasure");
const tip = document.getElementById("tip");
const treasureCoords = getTreasureCoords(map.clientWidth, map.clientHeight);

function getTreasureCoords(width, height) {
  const MAP_GAP = 40;

  return {
    x: MAP_GAP + Math.floor(Math.random() * (width - MAP_GAP * 2)),
    y: MAP_GAP + Math.floor(Math.random() * (height - MAP_GAP * 2)),
  };
}

function showTreasure(treasureCoords) {
  treasure.style.top = `${treasureCoords.y}px`;
  treasure.style.left = `${treasureCoords.x}px`;
  treasure.style.display = "block";
}

function getClickLength(p1, p2) {
  return Math.floor(Math.sqrt(
    (Math.floor(p1.x) - Math.floor(p2.x)) ** 2 +
      (Math.floor(p1.y) - Math.floor(p2.y)) ** 2
  ));
}

function showTip (length) {
    if (length < 20) {
        tip.textContent = 'КЛАД НАЙДЕН!';
        tip.style.color = 'purple';

    } else if (length < 40) {
        tip.textContent = 'ГОРЯЧО!';
        tip.style.color = 'red';
    } else if (length < 80) {
        tip.textContent = 'Тепло';
        tip.style.color = 'orange';
    } else if (length < 120) {
        tip.textContent = 'Прохладно';
        tip.style.color = 'lightblue';
    } else {
        tip.textContent = 'Зима близко!';
        tip.style.color = 'blue' ; 
    }
}

// showTreasure(treasureCoords);

map.addEventListener("click", (event) => {
  const clickCoords = {
    x: Math.floor(event.layerX),
    y: Math.floor(event.layerY),
  };

  const clickLength = getClickLength(clickCoords, treasureCoords);

  showTip(clickLength);

  if (clickLength < 20) {
    showTreasure(treasureCoords);
  }

});
  