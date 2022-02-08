import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_224_18} />
      <View style={styles.View_224_19}>
        <View style={styles.View_224_20}>
          <View style={styles.View_224_21} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4448/9c63/905728348e5546dacd789414a5e23d9e"
            }}
            style={styles.ImageBackground_224_22}
          />
          <View style={styles.View_224_23} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bf7/1bf1/7640798819f6f8d48bfb220f5972da2a"
          }}
          style={styles.ImageBackground_224_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eae/22ba/c76934539e79d7a983d94f7ee1de9510"
          }}
          style={styles.ImageBackground_224_28}
        />
        <View style={styles.View_224_33}>
          <View style={styles.View_224_34}>
            <Text style={styles.Text_224_34}>9:41</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2529/c1fb/efb88172b0f70c661ef4aac5290f49d6"
        }}
        style={styles.TouchableOpacity_224_35}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("409_225"))
        }
      />
      <View style={styles.View_224_37}>
        <Text style={styles.Text_224_37}>Mockup t-shirt</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ccf/76b5/2868e60570b3ab95c73ade23eb9954f8"
        }}
        style={styles.ImageBackground_224_38}
      />
      <View style={styles.View_224_40}>
        <Text style={styles.Text_224_40}>$4.99</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8138/3f1d/4c7ad61972d08cff14fab274aa427039"
        }}
        style={styles.ImageBackground_224_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8138/3f1d/4c7ad61972d08cff14fab274aa427039"
        }}
        style={styles.ImageBackground_224_42}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_409_433}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("224_189"))
        }
      >
        <View style={styles.View_224_43}>
          <View style={styles.View_224_44}>
            <Text style={styles.Text_224_44}>Item Detail</Text>
          </View>
          <View style={styles.View_224_45}>
            <Text style={styles.Text_224_45}>
              Nice eco fabric. I have also other colors, such as blue and
              yellow. Maybe used them couple of times. All in good condition.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5235/fe05/23b1e96aaee533e86c15c061a94c4f64"
          }}
          style={styles.ImageBackground_224_46}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b800/1ba3/d966f593df90298566ac0d188e6bebf0"
        }}
        style={styles.ImageBackground_224_174}
      />
      <View style={styles.View_224_182}>
        <Text style={styles.Text_224_182}>Published date</Text>
      </View>
      <View style={styles.View_241_125} />
      <View style={styles.View_241_126}>
        <Text style={styles.Text_241_126}>Write something...</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_241_129}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("60_310"))
        }
      >
        <View style={styles.View_I241_129_6_47} />
        <View style={styles.View_I241_129_6_48}>
          <Text text="" style={styles.Text_I241_129_6_48} />
        </View>
      </TouchableOpacity>
      <View style={styles.View_241_132}>
        <Text style={styles.Text_241_132}>Send</Text>
      </View>
      <View style={styles.View_348_320}>
        <View style={styles.View_348_321}>
          <Text style={styles.Text_348_321}>Annie</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b99b/38e8/15abbe80dcbb27333f100d358d237cb4"
        }}
        style={styles.ImageBackground_348_322}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701f/135e/b24ac279225690f153a3244a807e20e0"
        }}
        style={styles.ImageBackground_348_323}
      />
      <View style={styles.View_350_19}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c817/b82b/a6bada287d4a2d9ed17137002d5345dc"
          }}
          style={styles.ImageBackground_350_20}
        />
        <View style={styles.View_350_21} />
        <View style={styles.View_350_22} />
      </View>
      <View style={styles.View_224_67}>
        <View style={styles.View_224_68} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 245, 241, 1)" },
  View_2: { height: hp("122%") },
  View_224_18: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderColor: "rgba(250, 250, 250, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_224_19: {
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_224_20: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%")
  },
  View_224_21: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(24, 23, 37, 1)",
    borderWidth: 1
  },
  ImageBackground_224_22: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_224_23: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 23, 37, 1)"
  },
  ImageBackground_224_24: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_224_28: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_224_33: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_224_34: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_224_34: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  TouchableOpacity_224_35: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_224_37: {
    width: wp("51%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_224_37: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_224_38: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_224_40: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("60%"),
    justifyContent: "center"
  },
  Text_224_40: {
    color: "rgba(74, 87, 70, 1)",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_224_41: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("76%")
  },
  ImageBackground_224_42: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("94%")
  },
  TouchableOpacity_409_433: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("77%")
  },
  View_224_43: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_224_44: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_224_44: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_224_45: {
    width: wp("82%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_224_45: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_224_46: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_224_174: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  View_224_182: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("60%"),
    justifyContent: "center"
  },
  Text_224_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_241_125: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("98%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderColor: "rgba(74, 87, 70, 1)",
    borderWidth: 1
  },
  View_241_126: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("100%"),
    justifyContent: "flex-start"
  },
  Text_241_126: {
    color: "rgba(35, 10, 6, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_241_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("112%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I241_129_6_47: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(74, 87, 70, 1)"
  },
  View_I241_129_6_48: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I241_129_6_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_241_132: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("113%"),
    justifyContent: "flex-start"
  },
  Text_241_132: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_348_320: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("69%")
  },
  View_348_321: {
    width: wp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_348_321: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_348_322: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  ImageBackground_348_323: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("67%")
  },
  View_350_19: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("46%")
  },
  ImageBackground_350_20: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_350_21: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(179, 179, 179, 1)"
  },
  View_350_22: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(179, 179, 179, 1)"
  },
  View_224_67: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("120%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_224_68: {
    width: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 23, 37, 1)",
    borderColor: "rgba(230, 230, 230, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
