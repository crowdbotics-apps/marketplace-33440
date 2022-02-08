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
      <View style={styles.View_354_293}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I354_293_280_145}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("226_106"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebc9/55e0/b79d359324c388ab03bbe5a993aa5bbf"
            }}
            style={styles.ImageBackground_I354_293_280_145_280_93}
          />
          <View style={styles.View_I354_293_280_145_280_91}>
            <Text style={styles.Text_I354_293_280_145_280_91}>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I354_293_280_154}>
          <View style={styles.View_I354_293_280_143} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_354_464}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("60_310"))
        }
      >
        <View style={styles.View_I354_464_280_91}>
          <Text style={styles.Text_I354_464_280_91}>My Messages</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_354_438}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_720"))
        }
      >
        <Text style={styles.Text_354_438}>My Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_418_130}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("357_126"))
        }
      >
        <Text style={styles.Text_418_130}>My Listings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_354_440}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("6_55"))
        }
      >
        <Text style={styles.Text_354_440}>Log Out</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fe5/e230/004339e43de7f29465fd839915fe48f4"
        }}
        style={styles.ImageBackground_354_416}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_354_415}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("354_20"))
        }
      >
        <Text style={styles.Text_354_415}>Edit Profile</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32ca/885e/9e1d7c8ebe59b8e8a15842a282d7e202"
        }}
        style={styles.ImageBackground_354_413}
      />
      <View style={styles.View_354_414}>
        <Text style={styles.Text_354_414}>JohnSmith123</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1df4/28dd/e431b0e4c9597ae821dbc2c4fcc9ce2d"
        }}
        style={styles.ImageBackground_354_436}
      />
      <View style={styles.View_354_461}>
        <Text style={styles.Text_354_461}></Text>
      </View>
      <View style={styles.View_409_214} />
      <View style={styles.View_409_216}>
        <View style={styles.View_409_217}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7428/deed/5680a80a12b612bc6721da4c1c786a62"
            }}
            style={styles.ImageBackground_409_218}
          />
        </View>
      </View>
      <View style={styles.View_416_129}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f8f/7bd9/1d82061617eb9074decdba9dabd0e4ad"
          }}
          style={styles.ImageBackground_416_130}
        />
        <View style={styles.View_416_131}>
          <Text style={styles.Text_416_131}>1</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c26/de58/d8756dfd98c2d447eb85086da7952684"
        }}
        style={styles.ImageBackground_416_139}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_354_293: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("112%"),
    minHeight: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    overflow: "hidden"
  },
  TouchableOpacity_I354_293_280_145: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I354_293_280_145_280_93: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I354_293_280_145_280_91: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I354_293_280_145_280_91: {
    color: "rgba(72, 67, 75, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.22,
    textTransform: "none"
  },
  View_I354_293_280_154: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I354_293_280_143: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_354_464: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I354_464_280_91: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I354_464_280_91: {
    color: "rgba(72, 67, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  TouchableOpacity_354_438: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_354_438: {
    color: "rgba(72, 67, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  TouchableOpacity_418_130: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_418_130: {
    color: "rgba(72, 67, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  TouchableOpacity_354_440: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_354_440: {
    color: "rgba(72, 67, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  ImageBackground_354_416: {
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("32%")
  },
  TouchableOpacity_354_415: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_354_415: {
    color: "rgba(72, 67, 75, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  ImageBackground_354_413: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("21%")
  },
  View_354_414: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_354_414: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_354_436: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_354_461: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_354_461: {
    color: "rgba(27, 20, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_409_214: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_409_216: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_409_217: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_409_218: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_416_129: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("47%")
  },
  ImageBackground_416_130: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_416_131: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_416_131: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_416_139: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
