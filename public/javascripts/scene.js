function createSceneItem(scene) {
  var listItem = document.createElement('li');
  $(listItem).addClass('collection-item scene').data(scene);
  return listItem;
}
