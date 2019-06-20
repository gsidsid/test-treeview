$.jstree.defaults.core.themes.variant = "large";
$('#jstree_demo_div').jstree({ 'core' : {
    "check_callback" : true,
    'data' : [
       'Omnia',
       {
         'text' : 'T24',
         'state' : {
           'selected' : true
         },
         'children' : [
           { 'text' : 'ACCOUNT' },
           'RE.STAT.REP'
         ]
      }
    ],
    'themes': {
        'name': 'proton',
        'responsive': true
    }
},
"plugins" : [ "contextmenu" ]
 });