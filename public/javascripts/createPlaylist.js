function handleDrop(e) {
  e.preventDefault();
  $(e.target).append(
    '<li class="collection-item"><div>Scene<a href="#!" class="remove-scene" title="Remove Scene"><i class="material-icons">remove_circle_outline</i></a></div></li>'
  )
}

function handleDragOver(e) {
  e.preventDefault();
}
