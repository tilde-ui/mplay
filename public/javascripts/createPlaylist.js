$(document).ready(function() {
  $('li.scene div').each(function() {
    $(this).append(
      '<a href="#" class="add-scene" onClick="addToPlaylist(event)" title="Add Scene to Playlist"><i class="material-icons">playlist_add</i></a>'
    )
  })
})

function handleDrop(e) {
  e.preventDefault();

  $('.playlist-placeholder').hide();

  $(e.target).append(
    '<li class="collection-item"><div>Scene<a href="#" class="remove-scene" onClick="handleRemove(event)" title="Remove Scene"><i class="material-icons">remove_circle_outline</i></a></div></li>'
  )
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleRemove(e) {
  $(e.target).parent().parent().parent().remove();

  if ($('ol.playlist').children().length === 0) {
    $('ol.playlist').append(
      '<li class="collection-item placeholder">Playlist Empty</li>'
    )
  }
}

function addToPlaylist(e) {
  if ($('ol.playlist li.placeholder')) {
    $('ol.playlist li.placeholder').remove();
  }
  var sceneData = $(e.target).parent().parent().parent()[0].dataset.scene;
  var sceneIndex = $(e.target).parent().parent().parent()[0].dataset.index;

  $('ol.playlist').append(
    '<li class="collection-item" data-index=' + sceneIndex + '><div>' + JSON.parse(sceneData).title + '<a href="#" class="remove-scene" onClick="handleRemove(event)" title="Remove Scene"><i class="material-icons">remove_circle_outline</i></a></div></li>'
  )
}

function createPlaylist() {
  var scenes = $('ol.playlist li');
  var playlist = [];
  scenes.each(function(index) {
    playlist.push(this.dataset.index);
  })

  $.post('/playlists/create',
  {
    name: document.getElementsByName('title')[0].value,
    description: document.getElementsByName('description')[0].value,
    molecules: JSON.stringify(playlist),
    public: $('#public').is(':checked')
  }, function() {})
}
