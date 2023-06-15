Element.prototype.typer = function (
  words = ["This is", "TYPER", "from", "ahgsql@github"],
  options = {}
) {
  options = {
    typeDelay: 150,
    waitBetween: 1000,
    stopOnLast: false,
    ...options,
  };
  console.log(options);

  css = `
    .cursor {
        position: relative;
    }
    .cursor::after {
        content:"\\00a0";
        position: absolute;
        transform:scaleX(0.2);
        height: 80%;
        background-color: gray;
        left: 12px;
        top: 10%;
        animation-name: blink;
        animation-duration: 800ms;
        animation-iteration-count: infinite;
        opacity: 1;
    }
    
    .cursor input:focus + i {
        display: none;
    }
    @keyframes blink {
        from { opacity: 1; }
        to { opacity: 0; }
    }`;
  (head = document.head || document.getElementsByTagName("head")[0]),
    (style = document.createElement("style"));

  head.appendChild(style);

  style.type = "text/css";
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  this.paused = false;

  this.animateWord = function (word) {
    let element = this;
    return new Promise(function (resolve, reject) {
      let curr = "";
      word = " " + word;
      chars = word.split("");
      for (let index = 0; index < chars.length; index++) {
        setTimeout(() => {
          curr += chars[index];
          element.innerHTML = curr + "<span class='cursor'><i></span>";
          if (index === chars.length - 1) resolve();
        }, index * options.typeDelay);
      }
    });
  };
  this.stop = () => (this.paused = true);
  this.start = () => ((this.paused = false), this.run());
  this.wait = function (ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };
  this.run = async function () {
    while (!this.paused) {
      for (const word of words) {
        if (this.paused) return;
        await this.animateWord(word);
        await this.wait(options.waitBetween);
      }
      options.stopOnLast ? this.stop() : "";
    }
  };

  this.run();
};
function typer(selector, arr, options) {
  return document.querySelector(selector).typer(arr, options);
}
