import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@/themes';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  formGroup: {
    position: 'relative',
  },
  label: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.SECONDARY,
  },
  textField: {
    height: 40,
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: COLORS.LIGHT,
    color: COLORS.DARK,
    paddingRight: 40,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
  },
  statusShowPassword: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
    opacity: 0.5,
  },
  centeredView: {
    width,
    height,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBg: {
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.45,
  },
  modalView: {
    backgroundColor: '#FFF',
    width: 345,
    height: 280,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontFamily: 'Sarala-Regular',
    fontSize: 32,
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.WARNING,
  },
  modalContent: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    textAlign: 'center',
    color: COLORS.SECONDARY,
  },
  okButton: {
    width: 150,
    height: 40,
    backgroundColor: COLORS.WARNING,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  okText: {
    fontFamily: 'Sarala-Regular',
    fontSize: 15,
    color: COLORS.WHITE,
  },
});
