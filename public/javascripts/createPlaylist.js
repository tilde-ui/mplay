function handleDrop(e) {
  e.preventDefault();

  $('.playlist-placeholder').hide();

  $(e.target).append(
    '<li class="collection-item"><div>Scene<a href="#!" class="remove-scene" onClick="handleRemove(event)" title="Remove Scene"><i class="material-icons">remove_circle_outline</i></a></div></li>'
  )
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleRemove(e) {
  $(e.target).parent().parent().parent().remove();

}
