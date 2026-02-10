import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import TransactionReceiptStyle from '../../styles/TransactionReceiptStyle'
import { useNavigation } from '@react-navigation/native'

export default function AdminTransactionReceipt() {

    const cs = useNavigation()

    return (
        <ScrollView style={TransactionReceiptStyle.container}>
            <Text style={TransactionReceiptStyle.title}>Transaction Receipt</Text>
            <View style={TransactionReceiptStyle.card}>

                <View style={TransactionReceiptStyle.header}>
                    <Image
                        source={require("../../assets/images/Logo.png")}
                        style={TransactionReceiptStyle.logo}
                    />
                    <Text style={TransactionReceiptStyle.companyName}>M&RC Travel and Tours</Text>
                </View>

                <View style={TransactionReceiptStyle.receiptMeta}>
                    <Text style={TransactionReceiptStyle.receiptNumber}>RECEIPT #7322</Text>
                    <Text style={TransactionReceiptStyle.receiptMetaText}>
                        Date Issued: {' '}
                        <Text style={TransactionReceiptStyle.receiptMetaValue}>
                            January 3, 2026
                        </Text>
                    </Text>

                    <Text style={TransactionReceiptStyle.receiptMetaText}>
                        Issued By: {' '}
                        <Text style={TransactionReceiptStyle.receiptMetaValue}>
                            Juan Gabriel Lanuza
                        </Text>
                    </Text>
                </View>

                <Text style={TransactionReceiptStyle.label}>Order Amount:  ₱30,000</Text>
                <Text style={TransactionReceiptStyle.value}></Text>

                <Text style={TransactionReceiptStyle.label}>Payment Method: E-Wallet</Text>
                <Text style={TransactionReceiptStyle.value}></Text>

                <Text style={TransactionReceiptStyle.label}>Transaction Date: 2026-01-25</Text>
                <Text style={TransactionReceiptStyle.value}></Text>

                <Text style={TransactionReceiptStyle.label}>Transaction Number: #21738921832</Text>
                <Text style={TransactionReceiptStyle.value}></Text>

                <Text style={TransactionReceiptStyle.label}>Trip Code:  PKG-2837</Text>
                <Text style={TransactionReceiptStyle.value}></Text>

                <View style={TransactionReceiptStyle.installmentSection}>
                    <Text style={TransactionReceiptStyle.installmentTitle}>Installment Plan</Text>
                    <View style={TransactionReceiptStyle.installmentHeader}>
                        <Text style={[TransactionReceiptStyle.installmentCell, TransactionReceiptStyle.headerText]}>Payment</Text>
                        <Text style={[TransactionReceiptStyle.installmentCell, TransactionReceiptStyle.headerText]}>Due Date</Text>
                        <Text style={[TransactionReceiptStyle.installmentCell, TransactionReceiptStyle.headerText]}>Amount</Text>
                    </View>

                    <View style={TransactionReceiptStyle.installmentRow}>
                        <Text style={TransactionReceiptStyle.installmentCell}>Down Payment</Text>
                        <Text style={TransactionReceiptStyle.installmentCell}>Upon Booking</Text>
                        <Text style={TransactionReceiptStyle.installmentAmount}>₱8,000</Text>
                    </View>

                    <View style={TransactionReceiptStyle.installmentRow}>
                        <Text style={TransactionReceiptStyle.installmentCell}>1st Quarter</Text>
                        <Text style={TransactionReceiptStyle.installmentCell}>March 04</Text>
                        <Text style={TransactionReceiptStyle.installmentAmount}>₱6,000</Text>
                    </View>

                    <View style={TransactionReceiptStyle.installmentRow}>
                        <Text style={TransactionReceiptStyle.installmentCell}>2nd Quarter</Text>
                        <Text style={TransactionReceiptStyle.installmentCell}>June 05</Text>
                        <Text style={TransactionReceiptStyle.installmentAmount}>₱6,000</Text>
                    </View>

                    <View style={TransactionReceiptStyle.installmentRow}>
                        <Text style={TransactionReceiptStyle.installmentCell}>3rd Quarter</Text>
                        <Text style={TransactionReceiptStyle.installmentCell}>September 06</Text>
                        <Text style={TransactionReceiptStyle.installmentAmount}>₱6,000</Text>
                    </View>

                    <View style={TransactionReceiptStyle.installmentRow}>
                        <Text style={TransactionReceiptStyle.installmentCell}>4th Quarter</Text>
                        <Text style={TransactionReceiptStyle.installmentCell}>December 07</Text>
                        <Text style={TransactionReceiptStyle.installmentAmount}>₱4,000</Text>
                    </View>
                </View>



                <View style={TransactionReceiptStyle.footer}>
                    <Text style={TransactionReceiptStyle.footerText}> 123 Main Street, Manila, Philippines</Text>
                    <Text style={TransactionReceiptStyle.footerText}> +63 912 345 6789</Text>
                    <Text style={TransactionReceiptStyle.footerText}> m&rc@travels.com</Text>
                </View>
            </View>
            <TouchableOpacity
                style={TransactionReceiptStyle.button}
                onPress={() => {
                    cs.navigate('transactionmanagement')
                }}>
                <Text style={TransactionReceiptStyle.buttonText}>Back</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}