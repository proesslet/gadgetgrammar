<template>
    <div
      class="modal fade"
      id="loginmodal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
    <div class="modal-dialog modal-lg">
      <div class="modal-dialog text-dark">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">How to Play</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul>
              <li>
                Each guess must be a valid 5-letter technological word.
              </li>
              <li>
                The color of the tiles will change to show the correctness of your guess.
                <ul>
                  <li>
                    If the color of a tile turns green after input, the letter in that tile is in the correct spot.
                  </li>
                  <li>
                    If the color of a tile turns yellow after input, the letter in that tile is in the word, but in the wrong spot
                  </li>
                  <li>
                    If the color of a tile turns gray after input, the letter in that tile is not in the word
                  </li>
                </ul>
              </li>
            </ul>
           </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  <script>
  export default {
    name: "Modal",
    methods: {
      close() {
        this.$emit("close");
      },
    },
  };
  </script>
  