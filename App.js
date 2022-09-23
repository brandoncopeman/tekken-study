import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';



function HomeScreen ({navigation})  {
  return (
    <ScrollView style={{backgroundColor: 'grey', flex: 1}}>
    <View style={styles.home}> 
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('ArmorKing')} 
        >
        <Image source={require('./charimages/ak.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Akuma')} 
        >
        <Image source={require('./charimages/akuma.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Alisa')} 
        >
        <Image source={require('./charimages/alisa.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Anna')} 
        >
        <Image source={require('./charimages/anna.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Asuka')} 
        >
        <Image source={require('./charimages/asuka.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Bob')} 
        >
        <Image source={require('./charimages/bob.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Bryan')} 
        >
        <Image source={require('./charimages/bryan.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Claudio')} 
        >
        <Image source={require('./charimages/claudio.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Devil Jin')} 
        >
        <Image source={require('./charimages/dj.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Dragunov')} 
        >
        <Image source={require('./charimages/drag.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Eddy')} 
        >
        <Image source={require('./charimages/eddy.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Eliza')} 
        >
        <Image source={require('./charimages/eliza.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Fahkuma')} 
        >
        <Image source={require('./charimages/fahk.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Feng')} 
        >
        <Image source={require('./charimages/feng.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Ganyu')} 
        >
        <Image source={require('./charimages/gan.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Geese')} 
        >
        <Image source={require('./charimages/geese.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Gigas')} 
        >
        <Image source={require('./charimages/gigas.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Heihachi')} 
        >
        <Image source={require('./charimages/hei.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Hwo')} 
        >
        <Image source={require('./charimages/hwo.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('J7')} 
        >
        <Image source={require('./charimages/j7.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Jin')} 
        >
        <Image source={require('./charimages/jin.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Josie')} 
        >
        <Image source={require('./charimages/josie.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Julia')} 
        >
        <Image source={require('./charimages/julia.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Kat')} 
        >
        <Image source={require('./charimages/kat.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Kazumi')} 
        >
        <Image source={require('./charimages/kazumi.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Kazuya')} 
        >
        <Image source={require('./charimages/kazuya.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('King')} 
        >
        <Image source={require('./charimages/king.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Kuma')} 
        >
        <Image source={require('./charimages/kuma.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Kuni')} 
        >
        <Image source={require('./charimages/kuni.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Lars')} 
        >
        <Image source={require('./charimages/lars.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Law')} 
        >
        <Image source={require('./charimages/law.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Lee')} 
        >
        <Image source={require('./charimages/lee.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Lei')} 
        >
        <Image source={require('./charimages/lei.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Leo')} 
        >
        <Image source={require('./charimages/leo.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Leroy')} 
        >
        <Image source={require('./charimages/leroy.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Lidia')} 
        >
        <Image source={require('./charimages/lidia.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Lili')} 
        >
        <Image source={require('./charimages/lil.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Lucky')} 
        >
        <Image source={require('./charimages/lucky.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Marduk')} 
        >
        <Image source={require('./charimages/marduk.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Masr')} 
        >
        <Image source={require('./charimages/masr.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Mig')} 
        >
        <Image source={require('./charimages/mig.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Negan')} 
        >
        <Image source={require('./charimages/negan.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Nina')} 
        >
        <Image source={require('./charimages/nina.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Noctis')} 
        >
        <Image source={require('./charimages/noctis.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Panda')} 
        >
        <Image source={require('./charimages/panda.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Paul')} 
        >
        <Image source={require('./charimages/paul.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Shah')} 
        >
        <Image source={require('./charimages/shah.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Steve')} 
        >
        <Image source={require('./charimages/steve.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Xia')} 
        >
        <Image source={require('./charimages/xia.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Yoshi')} 
        >
        <Image source={require('./charimages/yoshi.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('Zaf')} 
        >
        <Image source={require('./charimages/zaf.png')} resizeMode='contain' style = {styles.ImagesStyle} />
      </TouchableOpacity>
    </View>
    </ScrollView>
  ); 
}

const akData = require('./chardata/armor_king.json')

function ArmorKingScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {akData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>        
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}

const akumaData = require('./chardata/akuma.json')

function AkumaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {akumaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}

const alisaData = require('./chardata/alisa.json')

function AlisaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {alisaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const annaData = require('./chardata/anna.json')

function AnnaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {annaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const asukaData = require('./chardata/asuka.json')

function AsukaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {asukaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const bobData = require('./chardata/bob.json')

function BobScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {bobData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const bryanData = require('./chardata/bryan.json')

function BryanScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {bryanData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const claudioData = require('./chardata/claudio.json')

function ClaudioScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {claudioData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const djData = require('./chardata/devil_jin.json')

function DJScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {djData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const dragData = require('./chardata/dragunov.json')

function DragScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {dragData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const eddyData = require('./chardata/eddy.json')

function EddyScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {eddyData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const elData = require('./chardata/eliza.json')

function ElizaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {elData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const faData = require('./chardata/fahkumram.json')

function FahkScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {faData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const feData = require('./chardata/feng.json')

function FengScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {feData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const gaData = require('./chardata/ganryu.json')

function GanScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {gaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const geData = require('./chardata/geese.json')

function GeeseScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {geData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const giData = require('./chardata/gigas.json')

function GigasScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {giData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const heData = require('./chardata/heihachi.json')

function HeiScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {heData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const hwData = require('./chardata/hwoarang.json')

function HwoScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {hwData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const j7Data = require('./chardata/jack7.json')

function J7Screen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {j7Data.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const jiData = require('./chardata/jin.json')

function JinScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {jiData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const joData = require('./chardata/josie.json')

function JosieScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {joData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const juData = require('./chardata/julia.json')

function JuliaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {juData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const katData = require('./chardata/katarina.json')

function KatScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {katData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const kazumiData = require('./chardata/kazumi.json')

function KazumiScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {kazumiData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const kazuyaData = require('./chardata/kazuya.json')

function KazuyaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {kazuyaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const kiData = require('./chardata/king.json')

function KingScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {kiData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const kumaData = require('./chardata/kuma.json')

function KumaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {kumaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const kuniData = require('./chardata/kuma.json')

function KuniScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {kuniData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const larsData = require('./chardata/lars.json')

function LarsScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {larsData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const lawData = require('./chardata/law.json')

function LawScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {lawData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const leeData = require('./chardata/lee.json')

function LeeScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {leeData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const leiData = require('./chardata/lei.json')

function LeiScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {leiData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const leoData = require('./chardata/leo.json')

function LeoScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {leoData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const leroyData = require('./chardata/leroy.json')

function LeroyScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {leroyData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const lidiaData = require('./chardata/kuma.json')

function LidiaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {lidiaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const liliData = require('./chardata/lili.json')

function LiliScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {liliData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const luckData = require('./chardata/lucky_chloe.json')

function LuckyScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {luckData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const marData = require('./chardata/marduk.json')

function MardukScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {marData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const masrData = require('./chardata/master_raven.json')

function MasrScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {masrData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const migData = require('./chardata/miguel.json')

function MigScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {migData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const negData = require('./chardata/negan.json')

function NeganScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {negData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}

const ninaData = require('./chardata/nina.json')

function NinaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {ninaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const noctData = require('./chardata/noctis.json')

function NoctisScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {noctData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const panData = require('./chardata/kuma.json')

function PandaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {panData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const paulData = require('./chardata/paul.json')

function PaulScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {paulData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const shahData = require('./chardata/shaheen.json')

function ShahScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {shahData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const steveData = require('./chardata/steve.json')

function SteveScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {steveData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const xiaData = require('./chardata/xiaoyu.json')

function XiaScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {xiaData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const yoData = require('./chardata/yoshimitsu.json')

function YoshiScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {yoData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}
const zafData = require('./chardata/zafina.json')

function ZafScreen ({navigation})  {
  return (
    <ScrollView>
    <View style={styles.char}>
      {zafData.map((data, key)=>{
      return(
        <View>
          <TouchableOpacity style={styles.moves}>
          <Text style={styles.movesText}>
            {data.Command}
          </Text>
          </TouchableOpacity>
        </View>  
      )}
      )}
    </View>
    </ScrollView>
  ); 
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName="Tekken Practice NotePad" 
      screenOptions={{ headerStyle: { backgroundColor: '#9E0000'}, 
      headerTintColor: '#fff',
      headerBackTitle: null, 
      headerTitleStyle: {fontWeight: 'bold',},  }}
    >
        <Stack.Screen name="Tekken Practice NotePad" component={HomeScreen} />
        <Stack.Screen name="ArmorKing" component={ArmorKingScreen} 
                options={{
                  headerRight: () => (
                    <Button
                      onPress={() => alert('This is a button!')}
                      title="Save"
                      color="#fff"
                    />
                  ),
                }}
        />
        <Stack.Screen name="Akuma" component={AkumaScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}
        />
        <Stack.Screen name="Alisa" component={AlisaScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Anna" component={AnnaScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Asuka" component={AsukaScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Bob" component={BobScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Bryan" component={BryanScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Claudio" component={ClaudioScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Devil Jin" component={DJScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Dragunov" component={DragScreen} 
          options={{
                  headerRight: () => (
                    <Button
                      onPress={() => alert('This is a button!')}
                      title="Save"
                      color="#fff"
                    />
                  ),
                }}/>
        <Stack.Screen name="Eddy" component={EddyScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Eliza" component={ElizaScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Fahkuma" component={FahkScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Feng" component={FengScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Ganyu" component={GanScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Geese" component={GeeseScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Gigas" component={GigasScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Heihachi" component={HeiScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Hwo" component={HwoScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="J7" component={J7Screen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Jin" component={JinScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Josie" component={JosieScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Julia" component={JuliaScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Kat" component={KatScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Kazumi" component={KazumiScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Kazuya" component={KazuyaScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="King" component={KingScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Kuma" component={KumaScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Kuni" component={KuniScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Lars" component={LarsScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Law" component={LawScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Lee" component={LeeScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Lei" component={LeiScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Leo" component={LeoScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Leroy" component={LeroyScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Lidia" component={LidiaScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Lili" component={LiliScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Lucky" component={LuckyScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Marduk" component={MardukScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Masr" component={MasrScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Mig" component={MigScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Negan" component={NeganScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Nina" component={NinaScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Noctis" component={NoctisScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Panda" component={PandaScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Paul" component={PaulScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Shah" component={ShahScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Steve" component={SteveScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }} />
        <Stack.Screen name="Xia" component={XiaScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Yoshi" component={YoshiScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>
        <Stack.Screen name="Zaf" component={ZafScreen} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  TouchableOpacity: {
    activeOpacity: 0.5,
    backgroundColor: '#F4F4F4',
    margin: 1,
  },
  ImagesStyle: {
    height: 100,
    width: 100,
  },

  char: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
    justifyContent: 'center',
    
  },
  moves: {
    activeOpacity: 0.5,
    backgroundColor: '#F4F4F4',
    margin: 1.25,
    
  },
  movesText:{
    fontSize: '30',
  },
  charText: {
    fontSize: '25',
  },
  
});
