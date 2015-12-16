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
}

function addToPlaylist(e) {
  var sceneData = $(e.target).parent().parent().parent()[0].dataset.scene;
  console.log(sceneData.replace(' ', '_'));
  $('ol.playlist').append(
    '<li class="collection-item" data-scene=' + sceneData.replace(' ', '_') + '><div>' + JSON.parse(sceneData).title + '<a href="#" class="remove-scene" onClick="handleRemove(event)" title="Remove Scene"><i class="material-icons">remove_circle_outline</i></a></div></li>'
  )
}

// function createPlaylist() {
//   var scenes = $('ol.playlist li');
//   scenes.each(function(index) {
//     console.log(scenes[index])
//   })
// }
