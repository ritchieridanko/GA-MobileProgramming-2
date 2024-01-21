import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    width: "90%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    marginHorizontal: SIZES.medium,
    marginTop: SIZES.superLarge,
  },
  loginWrapper: {
    gap: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  loginInput: {
    fontFamily: FONT.regular,
    height: "30%",
    width: "100%",
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.xSmall,
    fontSize: SIZES.medium,
  },
  loginBtn: {
    marginBottom: SIZES.large,
    backgroundColor: COLORS.tertiary,
    height: "20%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xSmall,
  },
  loginBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;
