import {
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '@utils/normalize';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  my_prescriptions_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(36),
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
  },
  close_icon: {
    marginTop: pixelSizeVertical(10),
    marginLeft: 'auto',
    marginRight: pixelSizeHorizontal(20),
    width: widthPixel(30),
    height: heightPixel(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#1c1c1c',
    fontSize: fontPixel(24),
    lineHeight: fontPixel(36),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  status_title: {
    color: '#1c1c1c',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(24),
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  profile_section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: pixelSizeVertical(10),
  },
  profile_wrapper: {
    width: widthPixel(80),
    height: heightPixel(80),
    marginVertical: pixelSizeVertical(16),
  },
  profile_name: {
    color: '#1c1c1c',
    fontSize: fontPixel(17),
    lineHeight: fontPixel(22),
    textTransform: 'capitalize',
    marginTop: pixelSizeVertical(16),
  },
  profile_id: {
    color: '#686868',
    fontSize: fontPixel(15),
    lineHeight: fontPixel(20),
    marginTop: pixelSizeVertical(10),
    textTransform: 'uppercase',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: pixelSizeVertical(25),
    // width: '100%',
  },
  menu_icon_wrapper: {
    width: widthPixel(26.23),
    height: heightPixel(11),
  },
  date: {
    color: '#686868',
    fontSize: fontPixel(12),
    lineHeight: fontPixel(18),
  },
  appointment_item_wrapper: {
    width: widthPixel(300),
    height: heightPixel(107),
    marginVertical: pixelSizeVertical(9),
  },
  modal_wrapper: {
    backgroundColor: 'rgba(57,72,85,0.9)',
    flex: 1,
  },
  calendar_wrapper: {
    backgroundColor: 'white',
    width: widthPixel(375),
    elevation: 3,
    height: heightPixel(450),
    borderRadius: 10,
    position: 'absolute',
    top: 224,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default styles;
