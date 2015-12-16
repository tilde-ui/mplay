$(document).ready(function() {
  $('li.scene div').each(function() {
    $(this).append(
      '<a class="preview-scene modal-trigger" href=#scenePreview onClick="loadPreview()" title="Preview Scene"><i class="material-icons">play_arrow</i></a>'
    )
  })
})
