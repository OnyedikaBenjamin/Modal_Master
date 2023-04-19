'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

    const openModal = function(){
        modal.classList.remove('hidden')         // This brings out the hidden class
        overlay.classList.remove('hidden')      // This makes the background outside the modal to be blury
    }                                          // modal.style.display = 'block';  this will also bring out the modal class
        
    const closeModal = function(){                        // This function closes the modal
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    }

    btnsOpenModal.forEach(element => element.addEventListener('click', openModal)); // for each of the modal class clicked, display the hidden modal
    btnCloseModal.addEventListener('click', closeModal)  // This function closes the modal by clicking the modal close button
    overlay.addEventListener('click', closeModal)       // This function also closes the modal by clicking the background outta the modal
    
    //----------------- READING INPUT FROM KEYBOARD KEYS---------------------------
    document.addEventListener('keydown', function(pressed){   // pressed is just an identifier
        if(pressed.key==='Escape' && !modal.classList.contains('hidden')){
                closeModal() }}) // Close the modal if we press the ESC key
