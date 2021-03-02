function getThemeValue(name: any, props: any, values: any) {
  var value = props.theme && props.theme[name];

  var themeValue;

  if (typeof value === "function") {
    themeValue = value(values);
  } else {
    themeValue = values[value];
  }

  if (typeof themeValue === "function") {
    return themeValue(props);
  } else {
    return themeValue;
  }
}

export function theme(name: any, values: any) {
  return function (props: any) {
    return getThemeValue(name, props, values);
  };
}

theme.variants = function (name: any, prop: any, values: any) {
  return function (props: any) {
    var variant = props[prop] && values[props[prop]];
    return variant && getThemeValue(name, props, variant);
  };
};
