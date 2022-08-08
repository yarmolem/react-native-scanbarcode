import React, {Suspense, lazy} from 'react';
import {ActivityIndicator} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type IconName =
  | 'eye'
  | 'eye-slash'
  | 'arrow-right'
  | 'qrcode'
  | 'arrow-left'
  | 'logout';

interface Props extends SvgProps {
  name: IconName;
}

const dirIcons = '../../../icons';

const IconEye = lazy(() => import(`${dirIcons}/eye-solid.svg`));
const IconQR = lazy(() => import(`${dirIcons}/qrcode-solid.svg`));
const IconEyeSlash = lazy(() => import(`${dirIcons}/eye-slash-solid.svg`));
const IconArrowLeft = lazy(() => import(`${dirIcons}/arrow-left-solid.svg`));
const IconArrowRight = lazy(() => import(`${dirIcons}/arrow-right-solid.svg`));
const IconLogout = lazy(() => import(`${dirIcons}/logout-solid.svg`));

const getIcon = (name: IconName) => {
  if (name === 'eye') return IconEye;
  if (name === 'eye-slash') return IconEyeSlash;
  if (name === 'arrow-right') return IconArrowRight;
  if (name === 'qrcode') return IconQR;
  if (name === 'arrow-left') return IconArrowLeft;
  if (name === 'logout') return IconLogout;

  return IconEye;
};

const Icon = ({name, ...props}: Props) => {
  const GenIcon = getIcon(name);

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <GenIcon {...props} />
    </Suspense>
  );
};

export default Icon;
