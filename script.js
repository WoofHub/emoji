const input = document.getElementById("text-1");
const output = document.getElementById("text-2");

const copiedBanner = document.querySelector(".copied-banner");

let template = `🔥 ‎ ‎ ‎ ‎ ‎🔥🔥🔥
  🔥 ‎ ‎ ‎ ‎ ‎ ‎🔥
  🔥🔥🔥🔥🔥
  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎   ‎🔥 ‎ ‎ ‎ ‎   ‎🔥
  🔥🔥🔥 ‎ ‎ ‎   ‎🔥`

function selectText(text) {
  text.focus();
  text.select();
  text.setSelectionRange(0, 99999);
}

function copyText(text) {
  navigator.clipboard.writeText(text.value);

  copiedBanner.classList.remove('clicked');
  void copiedBanner.offsetWidth;
  copiedBanner.classList.add("clicked");
}

function createEmojiArt() {
  if (input.value.length == 0) {
    output.value = "";
    return;
  }

  const splitEmojis = (string) => [...new Intl.Segmenter().segment(string)].map(x => x.segment)

  emojis = splitEmojis(input.value);

  let temp = template;
  let index = 0;

  for (let i = 0; i < 17; i++) {
    temp = temp.replace("🔥", emojis[index]);

    if (index == emojis.length - 1) index = 0;
    else index++;
  }

  output.value = temp;
}
