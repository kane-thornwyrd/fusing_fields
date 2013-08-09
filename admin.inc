<?php

function fusing_fields_demo_form(array $form = array(), &$form_state){

  $form['text'] = array(
    '#type' => 'textarea',
    '#title' => t('Standard Text Area')
  );

  $form[] = fused_fields(array(
    'email' => array(
      '#type' => 'emailfield',
      '#placeholder' => t('Put your e-mail there !')
    ),
    'ok' => array(
      '#type' => 'button',
      '#value' => t('Ok')
    )
  ));

  return $form;

}
