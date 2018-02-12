// eslint-disable-next-line no-unused-vars
const placebrysonHandler = createPluginHandler(function(props) {
  const filters = {
    'None': '',
    'Black and white': '/bw',
    'Sepia': '/sepia',
    'Sketch': '/sketch',
    'Pixelate': '/pixelate',
  };

  const initOpts = props.newImgFrame;

  const elements = [
    new Label({
      value: 'Width:'
    }),
    new TextField({
      name: 'width',
      value: initOpts.width
    }),
    new Label({
      value: 'Height:'
    }),
    new TextField({
      name: 'height',
      value: initOpts.height
    }),
    new Label({
      value: 'Filter:'
    }),
    new PopUpButton({
      name: 'filter',
      items: Object.keys(filters)
    })
  ];

  const onConfirm = createConfirmHandler({
    name: 'placebryson',
    api: props.api,
    group: props.target.group,
    host: 'placebryson.com',
    initOpts: initOpts,
    urlBuilder: function(parts) {
      const base = `${parts.protocol}${parts.host}`;
      // Cast as a string because the value coming back is an object
      const title = String(parts.allParts.filter);
      const filter = filters[title] || '';
      return `${base}/${parts.width}/${parts.height}${filter}`;
    }
  });

  new Alert({
    message: 'Options',
    info: 'Add an image of the living legend.',
    iconUrl: props.api.resourceNamed('placebryson.icns'),
    onConfirm: onConfirm
  }).append(elements).runModal();
});
