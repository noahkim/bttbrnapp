/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   ScrollView,
   Image,
   View,
   TouchableHighlight,
   Modal
 } from 'react-native';


class mobile extends Component {
    render() {
      return (
        <View style={styles.container}>
        <View style={styles.navigationBar}>
          <Image source={require('./ios/assets/images/logo.png')}/>
        </View>
        <ScrollView style={styles.mainScrollView}>

          <View style={styles.viewpager}>
              <Text style={styles.mainTitle}>Audio-Technica ATH-M50X Studio Headphones (Black) + Carry Pouch</Text>
              <View style={styles.pager}>
                  <Image source={{uri:'http://static1.squarespace.com/static/52dce1fde4b03cda32c47203/t/52f13e8fe4b0cdd199825bbf/1391541904496/Audio-Technica-ATH-M50x-over-ear-headphones.jpg'}} style={{width: 200, height: 200}} />
              </View>
              <View style={styles.priceContainer}>
                  <View style={styles.price}>
                      <Text style={styles.priceTitle}>BTTBRN Price</Text>
                      <Text style={styles.priceValue}>$89</Text>
                  </View>
                  <View style={styles.price}>
                      <Text style={styles.priceTitle}>Avg.Street</Text>
                      <Text style={styles.priceValue}>$149</Text>
                  </View>
                  <View style={styles.price}>
                      <Text style={styles.priceTitle}>Savings</Text>
                      <Text style={styles.priceValue}>41%</Text>
                  </View>
              </View>
          </View>

          <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                  DEAL MAP
              </Text>
              <View style={styles.dealMap}>
              <Image source={require('./ios/assets/images/dealmap.png')}/>
              </View>
          </View>

          <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                  OVERALL SCORE AND RECOMMENDATION
              </Text>
              <View style={styles.sectionContainer}>
                  <View style={styles.sectionScore}>
                      <Text style={styles.sectionScoreText}>8.5</Text>
                  </View>
                  <View style={styles.sectionContent}>
                          <Text style={styles.sectionContentText}>Deal is solid enough to buy even you’re thinking you want it but don’t need it.</Text>
                  </View>
              </View>
          </View>

          <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                  HISTORIC PRICE
              </Text>
              <View style={styles.sectionContainer}>
                  <View style={styles.sectionScore}>
                      <Text style={styles.sectionScoreText}>8.5</Text>
                  </View>
                  <View syle={styles.sectionContent}>
                      <Text style={styles.sectionContentText}>Savings off Historic Price Avg.</Text>
                      <View style={styles.sectionSecondary}>
                          <View style={styles.sectionSecondaryScore}>
                              <Text style={styles.secondaryScoreText}>8</Text>
                          </View>
                          <View style={styles.sectionSecondaryLabel}>
                              <Text style={styles.secondaryContentText}>(-$54 / -29%)</Text>
                          </View>
                      </View>
                      <Text style={styles.sectionContentText}>Savings off Historic Price Avg.</Text>
                      <View style={styles.sectionSecondary}>
                          <View style={styles.sectionSecondaryScore}>
                              <Text style={styles.secondaryScoreText}>8</Text>
                          </View>
                          <View style={styles.sectionSecondaryLabel}>
                              <Text style={styles.secondaryContentText}>(-$54 / -29%)</Text>
                          </View>
                      </View>
                  </View>
              </View>
              <Image style={styles.historicChart} source={require('./ios/assets/images/historic.png')}/>
              <View style={styles.historicContainer}>
                <View style={styles.column}>
                  <Text style={styles.secondaryTitle}>High</Text>
                  <Text style={styles.historicPrice}>$180</Text>
                  <Text style={styles.historicMonth}>(Nov)</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.secondaryTitle}>Low</Text>
                <Text style={styles.historicPrice}>$99</Text>
                <Text style={styles.historicMonth}>(Mar)</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.secondaryTitle}>Avg.</Text>
                <Text style={styles.historicPrice}>$140</Text>
                <Text style={styles.historicMonth}>(6 mo)</Text>
                </View>
              </View>
          </View>

          <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                  RESIDUAL VALUE
              </Text>
              <View style={styles.sectionContainer}>
                  <View style={styles.sectionScore}>
                      <Text style={styles.sectionScoreText}>8.5</Text>
                  </View>
                  <View syle={styles.sectionContent}>
                      <Text style={styles.sectionContentText}>Current Used Value</Text>
                      <View style={styles.sectionSecondary}>
                          <View style={styles.sectionSecondaryScore}>
                              <Text style={styles.secondaryScoreText}>10</Text>
                          </View>
                          <View style={styles.sectionSecondaryLabel}>
                              <Text style={styles.secondaryContentText}>(90-100%)</Text>
                          </View>
                      </View>
                      <Text style={styles.sectionContentText}>Used Market Desireability</Text>
                      <View style={styles.sectionSecondary}>
                          <View style={styles.sectionSecondaryScore}>
                              <Text style={styles.secondaryScoreText}>6</Text>
                          </View>
                          <View style={styles.sectionSecondaryLabel}>
                              <Text style={styles.secondaryContentText}>Moderate</Text>
                          </View>
                      </View>
                  </View>
              </View>
          </View>

          <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                  REVIEWS & METARATING
              </Text>
              <View style={styles.sectionContainer}>
                  <View style={styles.sectionScore}>
                      <Text style={styles.sectionScoreText}>8.5</Text>
                  </View>
                  <View style={styles.sectionContent}>
                      <View style={styles.ratingRow}>
                        <View style={styles.ratingLabel}>
                          <Text style={styles.ratingText}>Amazon</Text>
                        </View>
                        <View style={styles.ratingGrow}>
                        </View>
                        <View style={styles.ratingScore}>
                        <Text style={styles.ratingText}>4.5 out of 5</Text>
                        </View>
                      </View>
                      <View style={styles.ratingRow}>
                        <View style={styles.ratingLabel}>
                          <Text style={styles.ratingText}>Amazon</Text>
                        </View>
                        <View style={styles.ratingGrow}>
                        </View>
                        <View style={styles.ratingScore}>
                        <Text style={styles.ratingText}>4.5 out of 5</Text>
                        </View>
                      </View>
                      <View style={styles.ratingRow}>
                        <View style={styles.ratingLabel}>
                          <Text style={styles.ratingText}>Amazon</Text>
                        </View>
                        <View style={styles.ratingGrow}>
                        </View>
                        <View style={styles.ratingScore}>
                        <Text style={styles.ratingText}>4.5 out of 5</Text>
                        </View>
                      </View>
                      <View style={styles.ratingRow}>
                        <View style={styles.ratingLabel}>
                          <Text style={styles.ratingText}>Amazon</Text>
                        </View>
                        <View style={styles.ratingGrow}>
                        </View>
                        <View style={styles.ratingScore}>
                        <Text style={styles.ratingText}>4.5 out of 5</Text>
                        </View>
                      </View>
                      <View style={styles.ratingRow}>
                        <View style={styles.ratingLabel}>
                          <Text style={styles.ratingText}>Amazon</Text>
                        </View>
                        <View style={styles.ratingGrow}>
                        </View>
                        <View style={styles.ratingScore}>
                        <Text style={styles.ratingText}>4.5 out of 5</Text>
                        </View>
                      </View>
                  </View>
              </View>
              <Text style={styles.secondaryTitle}>
                  Video Reviews
              </Text>
          </View>

          <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                  VENDOR RATING
              </Text>
              <View style={styles.sectionContainer}>
                  <View style={styles.sectionScore}>
                      <Text style={styles.sectionScoreText}>8.5</Text>
                  </View>
                  <View style={styles.sectionContent}>
                      <View style={styles.ratingRow}>
                        <View style={styles.ratingLabel}>
                          <Text style={styles.ratingText}>Amazon</Text>
                        </View>
                        <View style={styles.ratingGrow}>
                        </View>
                        <View style={styles.ratingScore}>
                        <Text style={styles.ratingText}>4.5 out of 5</Text>
                        </View>
                      </View>
                      <View style={styles.ratingRow}>
                        <View style={styles.ratingLabel}>
                          <Text style={styles.ratingText}>Amazon</Text>
                        </View>
                        <View style={styles.ratingGrow}>
                        </View>
                        <View style={styles.ratingScore}>
                        <Text style={styles.ratingText}>4.5 out of 5</Text>
                        </View>
                      </View>
                      <View style={styles.ratingRow}>
                        <View style={styles.ratingLabel}>
                          <Text style={styles.ratingText}>Amazon</Text>
                        </View>
                        <View style={styles.ratingGrow}>
                        </View>
                        <View style={styles.ratingScore}>
                        <Text style={styles.ratingText}>4.5 out of 5</Text>
                        </View>
                      </View>
                      <View style={styles.ratingRow}>
                        <View style={styles.ratingLabel}>
                          <Text style={styles.ratingText}>Amazon</Text>
                        </View>
                        <View style={styles.ratingGrow}>
                        </View>
                        <View style={styles.ratingScore}>
                        <Text style={styles.ratingText}>4.5 out of 5</Text>
                        </View>
                      </View>
                  </View>
              </View>
          </View>


      </ScrollView>

         <TouchableHighlight onPress={this._onPressButton} style={styles.primarybutton}>
            <View>
                <Text style={styles.buttonlabel}>Buy</Text>
            </View>
        </TouchableHighlight>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({


   navigationBar:{
       flex:0.12,
       position:'relative',
       alignSelf:'stretch',
       justifyContent:'center',
       alignItems:'center',
       paddingTop:5,
       top:0,
       backgroundColor:'rgba(0,0,0,0.2)',
   },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#292831',
    },

    mainScrollView: {
        flex:1,
        alignSelf:'stretch',
    },

    viewpager: {
        flex:1,
        alignSelf:'stretch',
        alignItems:'center',
        backgroundColor:'#ffffff',
        padding:15,
        margin:15,
        borderRadius:4,
    },

   mainTitle: {
       fontSize:20,
       marginBottom:15,
       lineHeight:30,
       fontWeight:'200',
   },

  dealMap: {
       alignItems:'center',
       marginTop:15,
       marginBottom:15,
   },

   priceContainer: {
       flexDirection:'row',
       alignSelf:'stretch',
       paddingTop:15,
   },

   price :{
       flex:1,
       alignSelf:'stretch',
   },

   priceTitle :{
       fontSize:12,
       paddingBottom:5,
       textAlign:'center',
   },

   priceValue: {
       fontSize:20,
       fontWeight:'200',
       textAlign:'center',
   },

   section :{
       marginTop:20,
       marginLeft:15,
       marginRight:15,
       paddingBottom:15,
       borderBottomWidth:1,
       borderColor:'rgba(255,255,255,0.15)',
   },

   sectionTitle: {
       fontSize:12,
       color:'#ffffff',
       fontWeight:'bold',
       marginBottom:20,
   },

   sectionContainer: {
       flex: 1,
           flexDirection: 'row',
   },

   sectionScore: {
       width:80,
       height:80,
       borderRadius:4,
       justifyContent:'center',
       backgroundColor:'rgba(0,0,0,0.1)',
       marginRight:15,
       marginBottom:20,
       padding:15,
   },

   sectionScoreText:{
       color:'#FF7D7D',
       fontSize:36,
       fontWeight:'100',
       textAlign:'center',
   },

   sectionContent:{
           flex:1,
   },

   sectionContentText: {
       color:'#ffffff',
       paddingBottom:10,
       lineHeight:20,
   },

   sectionSecondary: {
       flexDirection:'row',
       paddingBottom:10,
       marginBottom:10,
   },

   sectionSecondaryScore:{
      flex:1,
      backgroundColor:'rgba(0,0,0,0.1)',
      padding:15,
      marginRight:15,
      height:30,
      justifyContent:'center',
      borderRadius:4,
   },


   sectionSecondaryLabel:{
       flex:4,
       justifyContent:'center',
   },

  secondaryScoreText:{
          color:'#FF7D7D',
          textAlign:'center',
  },

   secondaryContentText :{
       color:'#ffffff',
   },

   secondaryTitle:{
     color:'#ffffff',

   },

    primarybutton: {
        flex:.1,
        backgroundColor:'#FF7D7D',
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center',
    },

    buttonlabel: {
        color:'#ffffff',
        fontWeight:'bold',
    },

    historicChart:{
      marginTop:15,
      marginBottom:15,
    },

    historicPrice:{
      fontSize:24,
      color:'#FF7D7D',
      marginTop:5,
      marginBottom:5,
      fontWeight:'200',
    },

    historicMonth:{
      fontSize:12,
      color:'rgba(255,255,255,0.5)',
    },

    historicContainer:{
      flexDirection:'row',
      backgroundColor:'rgba(0,0,0,0.1)',
      padding:15,
      marginLeft:29,
      borderRadius:4,
    },

    ratingRow:{
      flexDirection:'row',
      marginBottom:5,
    },

    ratingLabel:{

    },

    ratingGrow:{
      flex:1,
      borderBottomWidth:0.5,
      borderColor:'rgba(255,255,255,0.1)',
      marginLeft:5,
      marginRight:5,
    },

    ratingScore:{
    },

    ratingText:{
      color:'#ffffff',
    },

    column:{
      flex:1,
    },

  });


AppRegistry.registerComponent('mobile', () => mobile);
