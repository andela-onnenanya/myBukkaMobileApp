import React, { Component } from 'react'
import { Share, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import propTypes from 'prop-types'
import {colors} from '../../styles/style'

export default class SocialShare extends Component {

    constructor(props){
        super(props)
        this.onPressEvnt=this.onPressEvnt.bind(this)
    }
  onPressEvnt() {
    
    // You cannot exclude third party apps :( but I've included them anyways...
    
    /*
      To exclude third parties you would need to manually filter them on the native side:
      
@implementation UIActivityViewControllerWithoutWhatsApp
- (BOOL)_shouldExcludeActivityType:(UIActivity *)activity
{
    if ([[activity activityType] isEqualToString:@"net.whatsapp.WhatsApp.ShareExtension"]) {
        return YES;
    }
    
    return [super _shouldExcludeActivityType:activity];
}

/// Reference: https://medium.com/@patoroco/uiactivityviewcontroller-workaround-to-share-in-whatsapp-in-ios-cac1df245a89
    */
    
    
    /*
      To include an image you must link it with `url`
      * web: `https://` or `http://`
      * base64: `data://`
      * local file: `file://`
      
      Also there is no way to disable: `Save to Files` ¯\_(ツ)_/¯
    */
    
    
    Share.share(
      {
        message: this.props.message,
        title: this.props.title,
        url: this.props.url
      },
      {
        tintColor: 0x056ecf,
        excludedActivityTypes: [
          "com.apple.UIKit.activity.PostToFacebook",
          "com.apple.UIKit.activity.PostToTwitter",
          "com.apple.UIKit.activity.PostToWeibo",
          "com.apple.UIKit.activity.Message",
          "com.apple.UIKit.activity.Mail",
          "com.apple.UIKit.activity.Print",
          "com.apple.UIKit.activity.CopyToPasteboard",
          "com.apple.UIKit.activity.AssignToContact",
          "com.apple.UIKit.activity.SaveToCameraRoll",
          "com.apple.UIKit.activity.AddToReadingList",
          "com.apple.UIKit.activity.PostToFlickr",
          "com.apple.UIKit.activity.PostToVimeo",
          "com.apple.UIKit.activity.PostToTencentWeibo",
          "com.apple.UIKit.activity.AirDrop",
          "com.apple.UIKit.activity.OpenInIBooks",
          "com.apple.UIKit.activity.MarkupAsPDF",
          "com.apple.reminders.RemindersEditorExtension", //Reminders
          "com.apple.mobilenotes.SharingExtension", // Notes
          "com.apple.mobileslideshow.StreamShareService", // iCloud Photo Sharing - This also does nothing :{
          
          // Not supported
          "com.linkedin.LinkedIn.ShareExtension", //LinkedIn
          "pinterest.ShareExtension", //Pinterest
          "com.google.GooglePlus.ShareExtension", //Google +
          "com.tumblr.tumblr.Share-With-Tumblr", //Tumblr
          "wefwef.YammerShare", //Yammer
          "com.hootsuite.hootsuite.HootsuiteShareExt", //HootSuite
          "net.naan.TwitterFonPro.ShareExtension-Pro", //Echofon
          "com.hootsuite.hootsuite.HootsuiteShareExt", //HootSuite
          "net.whatsapp.WhatsApp.ShareExtension" //WhatsApp
        ]
      }
    );
    
  }
  render() {
    return (
          <TouchableOpacity onPress={this.onPressEvnt}>
              <Icon name="share" 
                    size={20}
                    color={colors.a} />
          </TouchableOpacity>
    );
  }
}


/*
Raw Values:

UIActivityTypePostToFacebook, 
UIActivityTypePostToTwitter, 
UIActivityTypePostToWeibo, 
UIActivityTypeMessage, 
UIActivityTypeMail, 
UIActivityTypePrint, 
UIActivityTypeCopyToPasteboard, 
UIActivityTypeAssignToContact,
UIActivityTypeSaveToCameraRoll,
UIActivityTypeAddToReadingList,
UIActivityTypePostToFlickr,
UIActivityTypePostToVimeo,
UIActivityTypePostToTencentWeibo,
UIActivityTypeAirDrop

*/


SocialShare.propTypes={
    message: propTypes.string.isRequired ,
    title: propTypes.string.isRequired ,
    url: propTypes.string.isRequired ,
}