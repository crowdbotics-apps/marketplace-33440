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
      <View style={styles.View_217_15}>
        <View style={styles.View_217_16}>
          <View style={styles.View_217_17} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0117/75a7/4c6f8087dd2f49cc5b3327002a2ee7c1"
            }}
            style={styles.ImageBackground_217_18}
          />
          <View style={styles.View_217_19} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d71c/da8b/f2aa59df4a3c6481dae8f6edd2b6acd1"
          }}
          style={styles.ImageBackground_217_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d519/3f8a/c253353d15dd2285add21fea5aa293a1"
          }}
          style={styles.ImageBackground_217_24}
        />
        <View style={styles.View_217_29}>
          <View style={styles.View_217_30}>
            <Text style={styles.Text_217_30}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_217_31} />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2529/c1fb/efb88172b0f70c661ef4aac5290f49d6"
        }}
        style={styles.TouchableOpacity_217_32}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("394_278"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_217_33}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("217_1027"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88ae/5051/89c48c6d241c34dd605fb3e51c605a84"
          }}
          style={styles.ImageBackground_217_34}
        />
        <View style={styles.View_217_35} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88ae/5051/89c48c6d241c34dd605fb3e51c605a84"
          }}
          style={styles.ImageBackground_217_36}
        />
        <View style={styles.View_217_37} />
        <View style={styles.View_217_38} />
        <View style={styles.View_217_39} />
      </TouchableOpacity>
      <View style={styles.View_217_41}>
        <View style={styles.View_217_42} />
        <View style={styles.View_217_43}>
          <View style={styles.View_217_44}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05d5/f6aa/846229bac37a8d1ce9b3d753706a2b46"
              }}
              style={styles.ImageBackground_217_45}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b27f/5448/3568e950d537500f0e617ff5e18408b8"
              }}
              style={styles.ImageBackground_217_46}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1310/ea51/8f9276cac4eebb497c640f808edda274"
            }}
            style={styles.ImageBackground_217_47}
          />
        </View>
        <View style={styles.View_217_50}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cd2/a5df/53b68c43401d6001151c6b221f1f6edc"
            }}
            style={styles.ImageBackground_217_51}
          />
          <View style={styles.View_217_52}>
            <Text style={styles.Text_217_52}>t-shirt</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_217_540}>
        <View style={styles.View_217_342}>
          <View style={styles.View_217_346} />
          <View style={styles.View_217_345}>
            <View style={styles.View_217_347}>
              <Text style={styles.Text_217_347}>Pink t-shirt</Text>
            </View>
            <View style={styles.View_217_348}>
              <Text style={styles.Text_217_348}>$4.99</Text>
            </View>
            <View style={styles.View_217_352}>
              <Text style={styles.Text_217_352}>John Smith</Text>
            </View>
          </View>
          <View style={styles.View_217_675}>
            <Text style={styles.Text_217_675}>1 day ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b1d/4df3/60de3d6b375ba0610e449b907fe6898c"
            }}
            style={styles.ImageBackground_217_364}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/f965/981202695bbfa488ebc03324db5eb57f"
            }}
            style={styles.ImageBackground_224_72}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4244/1864/caa2507dabbde1cac37c3a0399fab659"
            }}
            style={styles.ImageBackground_230_21}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_217_613}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("224_17"))
          }
        >
          <View style={styles.View_217_614}>
            <View style={styles.View_217_615} />
            <View style={styles.View_217_616}>
              <Text style={styles.Text_217_616}>Mockup t-shirt</Text>
            </View>
            <View style={styles.View_217_617}>
              <Text style={styles.Text_217_617}>$4.99</Text>
            </View>
            <View style={styles.View_217_618}>
              <Text style={styles.Text_217_618}>John Smith</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0984/38b2/0262baea95dd419deb9f81e6609011c0"
            }}
            style={styles.ImageBackground_217_673}
          />
          <View style={styles.View_217_676}>
            <Text style={styles.Text_217_676}>1 month ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/f965/981202695bbfa488ebc03324db5eb57f"
            }}
            style={styles.ImageBackground_224_73}
          />
        </TouchableOpacity>
        <View style={styles.View_217_677}>
          <View style={styles.View_217_678}>
            <View style={styles.View_217_679} />
            <View style={styles.View_217_680}>
              <Text style={styles.Text_217_680}>What t-shirt</Text>
            </View>
            <View style={styles.View_217_681}>
              <Text style={styles.Text_217_681}>$4.99</Text>
            </View>
            <View style={styles.View_217_682}>
              <Text style={styles.Text_217_682}>John Smith</Text>
            </View>
          </View>
          <View style={styles.View_217_687}>
            <Text style={styles.Text_217_687}>1 month ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcab/e231/9a9f6222800dbab0daf1a537f5f41410"
            }}
            style={styles.ImageBackground_217_732}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/f965/981202695bbfa488ebc03324db5eb57f"
            }}
            style={styles.ImageBackground_224_74}
          />
        </View>
        <View style={styles.View_217_688}>
          <View style={styles.View_217_689}>
            <View style={styles.View_217_690} />
            <View style={styles.View_217_691}>
              <Text style={styles.Text_217_691}>Random t-shirt</Text>
            </View>
            <View style={styles.View_217_692}>
              <Text style={styles.Text_217_692}>$4.99</Text>
            </View>
            <View style={styles.View_217_693}>
              <Text style={styles.Text_217_693}>John Smith</Text>
            </View>
          </View>
          <View style={styles.View_217_698}>
            <Text style={styles.Text_217_698}>1 year ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c26b/17fd/8fda8d73aafd466894381255554a3e7e"
            }}
            style={styles.ImageBackground_217_733}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/f965/981202695bbfa488ebc03324db5eb57f"
            }}
            style={styles.ImageBackground_224_75}
          />
        </View>
        <View style={styles.View_217_699}>
          <View style={styles.View_217_700}>
            <View style={styles.View_217_701} />
            <View style={styles.View_217_702}>
              <Text style={styles.Text_217_702}>Sold t-shirt</Text>
            </View>
            <View style={styles.View_217_703}>
              <Text style={styles.Text_217_703}>$4.99</Text>
            </View>
            <View style={styles.View_217_704}>
              <Text style={styles.Text_217_704}>John Smith</Text>
            </View>
          </View>
          <View style={styles.View_217_709}>
            <Text style={styles.Text_217_709}>23 days ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f431/7407/150d90463efb96320a743113c5e7df18"
            }}
            style={styles.ImageBackground_217_734}
          />
          <View style={styles.View_217_735}>
            <Text style={styles.Text_217_735}>SOLD</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/f965/981202695bbfa488ebc03324db5eb57f"
            }}
            style={styles.ImageBackground_224_76}
          />
        </View>
        <View style={styles.View_217_710}>
          <View style={styles.View_217_711}>
            <View style={styles.View_217_712} />
            <View style={styles.View_217_713}>
              <Text style={styles.Text_217_713}>Mockup t-shirt</Text>
            </View>
            <View style={styles.View_217_714}>
              <Text style={styles.Text_217_714}>$4.99</Text>
            </View>
            <View style={styles.View_217_715}>
              <Text style={styles.Text_217_715}>John Smith</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/f965/981202695bbfa488ebc03324db5eb57f"
              }}
              style={styles.ImageBackground_224_80}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0984/38b2/0262baea95dd419deb9f81e6609011c0"
            }}
            style={styles.ImageBackground_217_719}
          />
          <View style={styles.View_217_720}>
            <Text style={styles.Text_217_720}>1 month ago</Text>
          </View>
        </View>
        <View style={styles.View_217_736}>
          <View style={styles.View_217_737}>
            <View style={styles.View_217_738} />
            <View style={styles.View_217_739}>
              <Text style={styles.Text_217_739}>Mockup t-shirt</Text>
            </View>
            <View style={styles.View_217_740}>
              <Text style={styles.Text_217_740}>$4.99</Text>
            </View>
            <View style={styles.View_217_741}>
              <Text style={styles.Text_217_741}>John Smith</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/f965/981202695bbfa488ebc03324db5eb57f"
              }}
              style={styles.ImageBackground_224_86}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0984/38b2/0262baea95dd419deb9f81e6609011c0"
            }}
            style={styles.ImageBackground_217_745}
          />
          <View style={styles.View_217_746}>
            <Text style={styles.Text_217_746}>1 month ago</Text>
          </View>
        </View>
        <View style={styles.View_217_747}>
          <View style={styles.View_217_748}>
            <View style={styles.View_217_749} />
            <View style={styles.View_217_750}>
              <Text style={styles.Text_217_750}>Mockup t-shirt</Text>
            </View>
            <View style={styles.View_217_751}>
              <Text style={styles.Text_217_751}>$4.99</Text>
            </View>
            <View style={styles.View_217_752}>
              <Text style={styles.Text_217_752}>John Smith</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/f965/981202695bbfa488ebc03324db5eb57f"
              }}
              style={styles.ImageBackground_224_87}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0984/38b2/0262baea95dd419deb9f81e6609011c0"
            }}
            style={styles.ImageBackground_217_756}
          />
          <View style={styles.View_217_757}>
            <Text style={styles.Text_217_757}>1 month ago</Text>
          </View>
        </View>
        <View style={styles.View_217_758}>
          <View style={styles.View_217_759}>
            <View style={styles.View_217_760} />
            <View style={styles.View_217_761}>
              <Text style={styles.Text_217_761}>Mockup t-shirt</Text>
            </View>
            <View style={styles.View_217_762}>
              <Text style={styles.Text_217_762}>$4.99</Text>
            </View>
            <View style={styles.View_217_763}>
              <Text style={styles.Text_217_763}>John Smith</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/f965/981202695bbfa488ebc03324db5eb57f"
              }}
              style={styles.ImageBackground_224_88}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0984/38b2/0262baea95dd419deb9f81e6609011c0"
            }}
            style={styles.ImageBackground_217_767}
          />
          <View style={styles.View_217_768}>
            <Text style={styles.Text_217_768}>1 month ago</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_418_245}>
        <View style={styles.View_418_246}>
          <View style={styles.View_418_247} />
          <View style={styles.View_418_248}>
            <View style={styles.View_418_249}>
              <Text style={styles.Text_418_249}>Explore</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00aa/8d0d/2dd16c2ec05c63bc5df664792ba4558b"
              }}
              style={styles.ImageBackground_418_250}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_418_253}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("226_106"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/766b/adf4/447e2db45c2877ac7a0928dd5ada8469"
              }}
              style={styles.ImageBackground_418_254}
            />
            <View style={styles.View_418_256}>
              <Text style={styles.Text_418_256}>Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_418_257}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("60_586"))
            }
          >
            <View style={styles.View_418_258}>
              <Text style={styles.Text_418_258}>Add Listing</Text>
            </View>
            <View style={styles.View_418_259}>
              <Text style={styles.Text_418_259}></Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_418_260}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("217_780"))
            }
          >
            <View style={styles.View_418_261}>
              <View style={styles.View_418_262}>
                <Text style={styles.Text_418_262}>Search</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6120/ad94/6de60c3ceacbc3c6567606fcd1a623c0"
                }}
                style={styles.ImageBackground_418_263}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.View_418_264}>
            <View style={styles.View_418_265}>
              <Text style={styles.Text_418_265}>More</Text>
            </View>
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e31/7ab3/f8234b1d60518993b56c8ae762e17a52"
              }}
              style={styles.TouchableOpacity_418_266}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("354_292"))
              }
            />
          </View>
        </View>
        <View style={styles.View_418_267}>
          <View style={styles.View_418_268} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("122%") },
  View_217_15: {
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_16: {
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
  View_217_17: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_217_18: {
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
  View_217_19: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_217_20: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_217_24: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_217_29: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_30: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_217_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_217_31: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_217_32: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  TouchableOpacity_217_33: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("8%")
  },
  ImageBackground_217_34: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_217_35: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(167, 65, 74, 1)",
    borderColor: "rgba(24, 23, 37, 1)",
    borderWidth: 0.30000001192092896
  },
  ImageBackground_217_36: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_217_37: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(167, 65, 74, 1)",
    borderColor: "rgba(24, 23, 37, 1)",
    borderWidth: 0.30000001192092896
  },
  View_217_38: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(167, 65, 74, 1)",
    borderColor: "rgba(24, 23, 37, 1)",
    borderWidth: 0.30000001192092896
  },
  View_217_39: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(167, 65, 74, 1)",
    borderColor: "rgba(24, 23, 37, 1)",
    borderWidth: 0.30000001192092896
  },
  View_217_41: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_217_42: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 252, 247, 1)"
  },
  View_217_43: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  View_217_44: {
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
  ImageBackground_217_45: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_217_46: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_217_47: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_217_50: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_217_51: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_217_52: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_217_52: {
    color: "rgba(24, 27, 25, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_540: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_217_342: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_346: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_217_345: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%")
  },
  View_217_347: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_217_347: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_348: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_217_348: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_217_352: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_217_352: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_675: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_217_675: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_217_364: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  ImageBackground_224_72: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_230_21: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  TouchableOpacity_217_613: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_614: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_217_615: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_217_616: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_616: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_617: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_217_617: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_217_618: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_217_618: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_217_673: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_217_676: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_676: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_224_73: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_217_677: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_678: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_217_679: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_217_680: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_680: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_681: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_217_681: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_217_682: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_217_682: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_687: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_687: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_217_732: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  ImageBackground_224_74: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_217_688: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_689: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_217_690: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_217_691: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_691: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_692: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_217_692: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_217_693: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_217_693: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_698: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_698: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_217_733: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  ImageBackground_224_75: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_217_699: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_700: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_217_701: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_217_702: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_702: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_703: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_217_703: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_217_704: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_217_704: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_709: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_709: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_217_734: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_217_735: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_217_735: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_224_76: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_217_710: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_711: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_217_712: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_217_713: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_713: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_714: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_217_714: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_217_715: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_217_715: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_224_80: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_217_719: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_217_720: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_736: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("108%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_737: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_217_738: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_217_739: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_739: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_740: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_217_740: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_217_741: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_217_741: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_224_86: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_217_745: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_217_746: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_747: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_748: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_217_749: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_217_750: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_750: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_751: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_217_751: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_217_752: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_217_752: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_224_87: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_217_756: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_217_757: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_757: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_758: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("143%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_217_759: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_217_760: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 245, 241, 1)"
  },
  View_217_761: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_761: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_762: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_217_762: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_217_763: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_217_763: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_224_88: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_217_767: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_217_768: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_217_768: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_418_245: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110%")
  },
  View_418_246: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_418_247: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_418_248: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%")
  },
  View_418_249: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_418_249: {
    color: "rgba(148, 147, 147, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_418_250: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_418_253: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("4%")
  },
  ImageBackground_418_254: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_418_256: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_418_256: {
    color: "rgba(88, 133, 74, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_418_257: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("4%")
  },
  View_418_258: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_418_258: {
    color: "rgba(40, 39, 38, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_418_259: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_418_259: {
    color: "rgba(148, 147, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_418_260: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("3%")
  },
  View_418_261: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_262: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_418_262: {
    color: "rgba(148, 147, 147, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_418_263: {
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_264: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("4%")
  },
  View_418_265: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_418_265: {
    color: "rgba(148, 147, 147, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_418_266: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_418_267: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_268: {
    width: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
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
