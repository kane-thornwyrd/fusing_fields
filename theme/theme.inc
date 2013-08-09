<?php

function template_preprocess_fused_fields(&$variables){

  $fields = element_children($variables['element'], true);
  foreach($fields as $field_name){
    $variables['fields'][$field_name] = drupal_render($variables['element'][$field_name]);
    unset($variables['element'][$field_name]);
  }
  dpm($variables['fields']);

  return $variables;
}

function theme_fused_fields($variables){
  $elements = $variables['element'];

  return 'okokok';
}
