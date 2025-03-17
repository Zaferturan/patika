// Elementleri seçme
const taskInput = document.getElementById('task');
const addButton = document.querySelector('.button');
const taskList = document.getElementById('list');
const successToast = document.getElementById('successToast');
const errorToast = document.getElementById('errorToast');

// Görev ekleme fonksiyonu
function newElement() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    showToast(errorToast);
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Silme butonu oluşturma
  const closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.textContent = '\u00D7'; // Çarpı işareti

  // Silme butonuna tıklama olayı ekleme
  closeButton.onclick = function() {
    listItem.remove();
  };

  listItem.appendChild(closeButton);
  taskList.appendChild(listItem);
  taskInput.value = '';
  showToast(successToast);
}

// Toast mesajlarını gösterme fonksiyonu
function showToast(toastElement) {
  $(toastElement).toast('show');
}

// Listeye tıklama olayı ekleme (yapıldı işaretleme)
taskList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});

// Ekle butonuna tıklama olayı ekleme
addButton.addEventListener('click', newElement);

// Input alanında Enter tuşuna basıldığında görev ekleme
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    newElement();
  }
});

// Sayfa yüklendiğinde listedeki mevcut öğelere silme butonu ekle
function addCloseButtonsToListItems() {
  const listItems = taskList.querySelectorAll('li');
  listItems.forEach(listItem => {
    if (!listItem.querySelector('.close')) { // Silme butonu yoksa ekle
      const closeButton = document.createElement('span');
      closeButton.className = 'close';
      closeButton.textContent = '\u00D7';
      closeButton.onclick = function() {
        listItem.remove();
      };
      listItem.appendChild(closeButton);
    }
  });
}

// Sayfa yüklendiğinde fonksiyonu çalıştır
addCloseButtonsToListItems();