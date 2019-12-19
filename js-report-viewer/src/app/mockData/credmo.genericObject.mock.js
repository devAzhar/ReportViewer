export const mockReportDataObject = {
    "reportData": {
        "bureau": "tui",
        "bureauFulfillmentKey": "tui-bureauFulfillmentKey-sample",
        "demographicData": {
            "name": {
                "first": "THOMAS",
                "middle": "E",
                "last": "FRIEDMAN"
            },
            "dateOfBirth": "1975-01-01",
            "address": {
                "address1": "535 30 RD A",
                "city": "GRAND JUNCTION",
                "state": "CO",
                "zip": "81504",
                "houseNumber": "535",
                "postDirection": '',
                "streetName": "30",
                "streetType": "RD",
                "unit": "A"
            },
            "previousAddresses": [
                {
                    "address1": "312 OURAY AV",
                    "city": "GRAND JUNCTION",
                    "state": "CO",
                    "zip": "81501",
                    "houseNumber": "312",
                    "postDirection": '',
                    "streetName": "OURAY",
                    "streetType": "AV",
                    "unit": ''
                },
                {
                    "address1": "444 PEAR LN",
                    "city": "GRAND JUNCTION",
                    "state": "CO",
                    "zip": "81504",
                    "houseNumber": "444",
                    "postDirection": '',
                    "streetName": "PEAR",
                    "streetType": "LN",
                    "unit": ''
                }
            ],
            "SSN": "666234390"
        },
        "summary": {
            "tradelineSummary": {
                "totalMonthlyPayments": "559",
                "totalBalances": "26855",
                "derogatoryAccounts": "3",
                "delinquentAccounts": "7",
                "closeAccounts": "13",
                "openAccounts": "13",
                "totalAccounts": "26"
            },
            "inquirySummary": {
                "numberInLast2Years": "8"
            },
            "publicRecordSummary": {
                "numberOfRecords": "0"
            }
        },
        "creditScore": {
            "riskScore": "677",
            "scoreName": "VantageScore3",
            "populationRank": "53"
        },
        "inquiries": [
            {
                "date": "2015-02-19",
                "subscriberName": "NACM",
                "subscriberNumber": "02451000",
                "bureau": "TransUnion",
                "inquiryType": "I",
                "inquiryDate": "2015-06-09",
                "reference": "999999-17955963",
                "industryCode": null
            },
            {
                "date": "2015-01-14",
                "subscriberName": "CAP ONE",
                "subscriberNumber": "02699824",
                "bureau": "TransUnion",
                "inquiryType": "I",
                "inquiryDate": "2015-06-09",
                "reference": "999999-17955963",
                "industryCode": null
            },
            {
                "date": "2014-09-28",
                "subscriberName": "AMERICREDIT",
                "subscriberNumber": "00027016",
                "bureau": "TransUnion",
                "inquiryType": "I",
                "inquiryDate": "2015-06-09",
                "reference": "999999-17955963",
                "industryCode": null
            },
            {
                "date": "2014-09-28",
                "subscriberName": "CHASE AUTO",
                "subscriberNumber": "02018161",
                "bureau": "TransUnion",
                "inquiryType": "I",
                "inquiryDate": "2015-06-09",
                "reference": "999999-17955963",
                "industryCode": null
            },
            {
                "date": "2014-09-28",
                "subscriberName": "COAF",
                "subscriberNumber": "01246538",
                "bureau": "TransUnion",
                "inquiryType": "I",
                "inquiryDate": "2015-06-09",
                "reference": "999999-17955963",
                "industryCode": null
            },
            {
                "date": "2014-09-28",
                "subscriberName": "CREDCO",
                "subscriberNumber": "08256078",
                "bureau": "TransUnion",
                "inquiryType": "I",
                "inquiryDate": "2015-06-09",
                "reference": "999999-17955963",
                "industryCode": null
            },
            {
                "date": "2014-09-25",
                "subscriberName": "CHASE MTG",
                "subscriberNumber": "01264350",
                "bureau": "TransUnion",
                "inquiryType": "I",
                "inquiryDate": "2015-06-09",
                "reference": "999999-17955963",
                "industryCode": null
            },
            {
                "date": "2014-09-11",
                "subscriberName": "NACM",
                "subscriberNumber": "02451000",
                "bureau": "TransUnion",
                "inquiryType": "I",
                "inquiryDate": "2015-06-09",
                "reference": "999999-17955963",
                "industryCode": null
            }
        ],
        "tradeLineItems": [
            {
                "info": {
                    "subscriberCode": "021T9002",
                    "highBalance": "4569",
                    "dateVerified": "2015-05-18",
                    "dateReported": "2015-05-18",
                    "creditorName": "LVNV FUNDING",
                    "dateAccountStatus": "2015-05-18",
                    "currentBalance": "5569",
                    "bureau": "TransUnion",
                    "accountNumber": "5X3X0X1X6X5X7X8",
                    "dateOpened": "2012-08-17",
                    "handle": '',
                    "position": "0",
                    "accountCondition": {
                        "abbreviation": "Derog",
                        "description": "Derogatory",
                        "symbol": "F",
                        "rank": "20"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Collection Services",
                        "description": "Collection Services",
                        "symbol": "Y",
                        "rank": "199"
                    },
                    "openClosed": {},
                    "payStatus": {
                        "abbreviation": "Coll/Chargeoff",
                        "description": "Collection/Chargeoff",
                        "symbol": "9",
                        "rank": "2"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Account information disputed by consumer, meets FCRA requirements",
                            "description": "Account information disputed by consumer, meets FCRA requirements",
                            "symbol": "T00AID",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": "12 HSBC BANK NEV FURN ROW TIER 2",
                        "actualPaymentAmount": 0,
                        "creditType": {
                            "abbreviation": "Collection",
                            "description": "Collection Account",
                            "symbol": "Y",
                            "rank": "5"
                        }
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Collection",
                    "description": "Collection Account",
                    "symbol": "Y",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "0235198Z",
                    "highBalance": "4568",
                    "dateVerified": "2015-02-10",
                    "dateReported": "2015-02-10",
                    "creditorName": "HSBC FRNRW",
                    "dateAccountStatus": "2012-09-19",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "59360596037",
                    "dateOpened": "2010-09-08",
                    "handle": '',
                    "position": "1",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "Coll/Chargeoff",
                        "description": "Collection/Chargeoff",
                        "symbol": "9",
                        "rank": "2"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Revolving",
                    "description": "Revolving Account",
                    "symbol": "R",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "0722D62X",
                    "highBalance": "1660",
                    "dateVerified": "2015-01-21",
                    "dateReported": "2015-01-21",
                    "creditorName": "KAY JEWELERS",
                    "dateAccountStatus": "2012-08-21",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "3X0X8X",
                    "dateOpened": "1998-06-06",
                    "handle": '',
                    "position": "2",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Jewelry/Cameras",
                        "description": "Jewelry/Cameras",
                        "symbol": "J",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "Coll/Chargeoff",
                        "description": "Collection/Chargeoff",
                        "symbol": "9",
                        "rank": "2"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Revolving",
                    "description": "Revolving Account",
                    "symbol": "R",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01XHC001",
                    "highBalance": "2438",
                    "dateVerified": "2013-07-01",
                    "dateReported": "2013-07-01",
                    "creditorName": "WE EFS",
                    "dateAccountStatus": "2013-07-01",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "8X5X2X1X2X7X0X6",
                    "dateOpened": "2010-08-20",
                    "handle": '',
                    "position": "3",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "120 Delinq",
                        "description": "Late 120 Days",
                        "symbol": "4",
                        "rank": "102"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Dispute resolved; customer disagrees",
                            "description": "Dispute resolved; customer disagrees",
                            "symbol": "T00DRC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01XHC001",
                    "highBalance": "2750",
                    "dateVerified": "2013-07-01",
                    "dateReported": "2013-07-01",
                    "creditorName": "WE EFS",
                    "dateAccountStatus": "2013-07-01",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "8X5X2X1X2X7X0X7",
                    "dateOpened": "2010-08-20",
                    "handle": '',
                    "position": "4",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "120 Delinq",
                        "description": "Late 120 Days",
                        "symbol": "4",
                        "rank": "102"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Dispute resolved; customer disagrees",
                            "description": "Dispute resolved; customer disagrees",
                            "symbol": "T00DRC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01XHC001",
                    "highBalance": "2625",
                    "dateVerified": "2013-07-01",
                    "dateReported": "2013-07-01",
                    "creditorName": "WE EFS",
                    "dateAccountStatus": "2013-07-01",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "8X5X2X1X2X7X0X1",
                    "dateOpened": "2010-01-11",
                    "handle": '',
                    "position": "5",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "120 Delinq",
                        "description": "Late 120 Days",
                        "symbol": "4",
                        "rank": "102"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Dispute resolved; customer disagrees",
                            "description": "Dispute resolved; customer disagrees",
                            "symbol": "T00DRC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01XHC001",
                    "highBalance": "1920",
                    "dateVerified": "2013-07-01",
                    "dateReported": "2013-07-01",
                    "creditorName": "WE EFS",
                    "dateAccountStatus": "2013-07-01",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "8X5X2X1X2X7X0X2",
                    "dateOpened": "2010-01-31",
                    "handle": '',
                    "position": "6",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "120 Delinq",
                        "description": "Late 120 Days",
                        "symbol": "4",
                        "rank": "102"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Dispute resolved; customer disagrees",
                            "description": "Dispute resolved; customer disagrees",
                            "symbol": "T00DRC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01XHC001",
                    "highBalance": "3479",
                    "dateVerified": "2013-07-01",
                    "dateReported": "2013-07-01",
                    "creditorName": "WE EFS",
                    "dateAccountStatus": "2013-07-01",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "8X5X2X1X2X7X0X5",
                    "dateOpened": "2010-05-15",
                    "handle": '',
                    "position": "7",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "120 Delinq",
                        "description": "Late 120 Days",
                        "symbol": "4",
                        "rank": "102"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Dispute resolved; customer disagrees",
                            "description": "Dispute resolved; customer disagrees",
                            "symbol": "T00DRC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01XHC001",
                    "highBalance": "836",
                    "dateVerified": "2013-07-01",
                    "dateReported": "2013-07-01",
                    "creditorName": "WE EFS",
                    "dateAccountStatus": "2013-07-01",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "8X5X2X1X2X7X0X3",
                    "dateOpened": "2010-01-31",
                    "handle": '',
                    "position": "8",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "120 Delinq",
                        "description": "Late 120 Days",
                        "symbol": "4",
                        "rank": "102"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Dispute resolved; customer disagrees",
                            "description": "Dispute resolved; customer disagrees",
                            "symbol": "T00DRC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01XHC001",
                    "highBalance": "955",
                    "dateVerified": "2013-07-01",
                    "dateReported": "2013-07-01",
                    "creditorName": "WE EFS",
                    "dateAccountStatus": "2013-07-01",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "8X5X2X1X2X7X0X4",
                    "dateOpened": "2010-01-11",
                    "handle": '',
                    "position": "9",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "120 Delinq",
                        "description": "Late 120 Days",
                        "symbol": "4",
                        "rank": "102"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Dispute resolved; customer disagrees",
                            "description": "Dispute resolved; customer disagrees",
                            "symbol": "T00DRC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "041PF016",
                    "highBalance": "469",
                    "dateVerified": "2015-05-19",
                    "dateReported": "2015-05-19",
                    "creditorName": "FST PREMIER",
                    "dateAccountStatus": "2015-05-19",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "517801537920",
                    "dateOpened": "2011-09-14",
                    "handle": '',
                    "position": "10",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Revolving",
                    "description": "Revolving Account",
                    "symbol": "R",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "07991189",
                    "highBalance": "370",
                    "dateVerified": "2015-05-19",
                    "dateReported": "2015-05-19",
                    "creditorName": "HSBC BANK",
                    "dateAccountStatus": "2015-05-19",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "512025853375",
                    "dateOpened": "2014-09-07",
                    "handle": '',
                    "position": "11",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Revolving",
                    "description": "Revolving Account",
                    "symbol": "R",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "08834002",
                    "highBalance": "2750",
                    "dateVerified": "2015-05-16",
                    "dateReported": "2015-05-16",
                    "creditorName": "NELNET LNS",
                    "dateAccountStatus": "2015-05-16",
                    "currentBalance": "2744",
                    "bureau": "TransUnion",
                    "accountNumber": "3X3X9",
                    "dateOpened": "2010-08-20",
                    "handle": '',
                    "position": "12",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Education/Employment",
                        "description": "Education/Employment",
                        "symbol": "E",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "08834002",
                    "highBalance": "836",
                    "dateVerified": "2015-05-16",
                    "dateReported": "2015-05-16",
                    "creditorName": "NELNET LNS",
                    "dateAccountStatus": "2015-05-16",
                    "currentBalance": "879",
                    "bureau": "TransUnion",
                    "accountNumber": "3X4X9",
                    "dateOpened": "2010-01-26",
                    "handle": '',
                    "position": "13",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Education/Employment",
                        "description": "Education/Employment",
                        "symbol": "E",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "08834002",
                    "highBalance": "1920",
                    "dateVerified": "2015-05-16",
                    "dateReported": "2015-05-16",
                    "creditorName": "NELNET LNS",
                    "dateAccountStatus": "2015-05-16",
                    "currentBalance": "1917",
                    "bureau": "TransUnion",
                    "accountNumber": "3X2X9",
                    "dateOpened": "2010-01-26",
                    "handle": '',
                    "position": "14",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Education/Employment",
                        "description": "Education/Employment",
                        "symbol": "E",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "08834002",
                    "highBalance": "3479",
                    "dateVerified": "2015-05-16",
                    "dateReported": "2015-05-16",
                    "creditorName": "NELNET LNS",
                    "dateAccountStatus": "2015-05-16",
                    "currentBalance": "3702",
                    "bureau": "TransUnion",
                    "accountNumber": "3X5X9",
                    "dateOpened": "2010-05-15",
                    "handle": '',
                    "position": "15",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Education/Employment",
                        "description": "Education/Employment",
                        "symbol": "E",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "08834002",
                    "highBalance": "2625",
                    "dateVerified": "2015-05-16",
                    "dateReported": "2015-05-16",
                    "creditorName": "NELNET LNS",
                    "dateAccountStatus": "2015-05-16",
                    "currentBalance": "2621",
                    "bureau": "TransUnion",
                    "accountNumber": "3X0X9",
                    "dateOpened": "2010-01-11",
                    "handle": '',
                    "position": "16",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Education/Employment",
                        "description": "Education/Employment",
                        "symbol": "E",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "08834002",
                    "highBalance": "2438",
                    "dateVerified": "2015-05-16",
                    "dateReported": "2015-05-16",
                    "creditorName": "NELNET LNS",
                    "dateAccountStatus": "2015-05-16",
                    "currentBalance": "2566",
                    "bureau": "TransUnion",
                    "accountNumber": "3X6X9",
                    "dateOpened": "2010-08-20",
                    "handle": '',
                    "position": "17",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Education/Employment",
                        "description": "Education/Employment",
                        "symbol": "E",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "08834002",
                    "highBalance": "955",
                    "dateVerified": "2015-05-16",
                    "dateReported": "2015-05-16",
                    "creditorName": "NELNET LNS",
                    "dateAccountStatus": "2015-05-16",
                    "currentBalance": "953",
                    "bureau": "TransUnion",
                    "accountNumber": "3X1X9",
                    "dateOpened": "2010-01-11",
                    "handle": '',
                    "position": "18",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Education/Employment",
                        "description": "Education/Employment",
                        "symbol": "E",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01DTV001",
                    "highBalance": "520",
                    "dateVerified": "2015-05-14",
                    "dateReported": "2015-05-14",
                    "creditorName": "CAPITAL ONE",
                    "dateAccountStatus": "2015-05-14",
                    "currentBalance": "18",
                    "bureau": "TransUnion",
                    "accountNumber": "517803199783",
                    "dateOpened": "2015-01-01",
                    "handle": '',
                    "position": "19",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {}
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Revolving",
                    "description": "Revolving Account",
                    "symbol": "R",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "041PF016",
                    "highBalance": "412",
                    "dateVerified": "2015-05-06",
                    "dateReported": "2015-05-06",
                    "creditorName": "FST PREMIER",
                    "dateAccountStatus": "2012-10-22",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "517809244192",
                    "dateOpened": "2010-07-23",
                    "handle": '',
                    "position": "20",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Account closed by consumer",
                            "description": "Account closed by consumer",
                            "symbol": "T00CBC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Revolving",
                    "description": "Revolving Account",
                    "symbol": "R",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "07991189",
                    "highBalance": "683",
                    "dateVerified": "2015-05-05",
                    "dateReported": "2015-05-05",
                    "creditorName": "HSBC BANK",
                    "dateAccountStatus": "2015-05-05",
                    "currentBalance": "254",
                    "bureau": "TransUnion",
                    "accountNumber": "526832372484",
                    "dateOpened": "2012-01-10",
                    "handle": '',
                    "position": "21",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Dispute resolved; customer disagrees",
                            "description": "Dispute resolved; customer disagrees",
                            "symbol": "T00DRC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Revolving",
                    "description": "Revolving Account",
                    "symbol": "R",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "08251008",
                    "highBalance": "14103",
                    "dateVerified": "2015-04-30",
                    "dateReported": "2015-04-30",
                    "creditorName": "CHASE AUTO",
                    "dateAccountStatus": "2015-04-30",
                    "currentBalance": "5632",
                    "bureau": "TransUnion",
                    "accountNumber": "5X8X3X2X8X1X",
                    "dateOpened": "2010-12-31",
                    "handle": '',
                    "position": "22",
                    "accountCondition": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "60"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Open",
                        "description": "Open",
                        "symbol": "O",
                        "rank": "199"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Dispute resolved; customer disagrees",
                            "description": "Dispute resolved; customer disagrees",
                            "symbol": "T00DRC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Installment",
                    "description": "Installment Account",
                    "symbol": "I",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01DTV001",
                    "highBalance": "106",
                    "dateVerified": "2014-07-02",
                    "dateReported": "2014-07-02",
                    "creditorName": "CAPITAL ONE",
                    "dateAccountStatus": "2014-05-11",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "517807203453",
                    "dateOpened": "2014-02-19",
                    "handle": '',
                    "position": "23",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Account closed by consumer",
                            "description": "Account closed by consumer",
                            "symbol": "T00CBC",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Revolving",
                    "description": "Revolving Account",
                    "symbol": "R",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "01DTV001",
                    "highBalance": "649",
                    "dateVerified": "2011-09-16",
                    "dateReported": "2011-09-16",
                    "creditorName": "CAPITAL ONE",
                    "dateAccountStatus": "2011-03-01",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "517803794572",
                    "dateOpened": "2010-03-14",
                    "handle": '',
                    "position": "24",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Individual",
                        "description": "Individual",
                        "symbol": "I",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Settled - less than full balance",
                            "description": "Settled - less than full balance",
                            "symbol": "T00SET",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Revolving",
                    "description": "Revolving Account",
                    "symbol": "R",
                    "rank": ''
                }
            },
            {
                "info": {
                    "subscriberCode": "0617C001",
                    "highBalance": "0",
                    "dateVerified": "2007-06-30",
                    "dateReported": "2007-06-30",
                    "creditorName": "BANK ONE",
                    "dateAccountStatus": "2007-05-31",
                    "currentBalance": "0",
                    "bureau": "TransUnion",
                    "accountNumber": "4X9X0X0X",
                    "dateOpened": "1996-04-08",
                    "handle": '',
                    "position": "25",
                    "accountCondition": {
                        "abbreviation": "Paid",
                        "description": "Paid",
                        "symbol": "P",
                        "rank": "10"
                    },
                    "accountDesignator": {
                        "abbreviation": "Joint",
                        "description": "Joint",
                        "symbol": "J",
                        "rank": "199"
                    },
                    "disputeFlag": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "industryCode": {
                        "abbreviation": "Bank",
                        "description": "Bank",
                        "symbol": "B",
                        "rank": "199"
                    },
                    "openClosed": {
                        "abbreviation": "Closed",
                        "description": "Closed",
                        "symbol": "C",
                        "rank": "198"
                    },
                    "payStatus": {
                        "abbreviation": "Current",
                        "description": "Current",
                        "symbol": "C",
                        "rank": "110"
                    },
                    "verificationIndicator": {
                        "abbreviation": "Account not disputed",
                        "description": "Account not disputed",
                        "symbol": "F",
                        "rank": "199"
                    },
                    "remark": {
                        "customRemark": '',
                        "remarkCode": {
                            "abbreviation": "Closed",
                            "description": "Closed",
                            "symbol": "T00CLO",
                            "rank": "199"
                        }
                    },
                    "collectionTrade": {
                        "originalCreditor": '',
                        "actualPaymentAmount": 0,
                        "creditType": {}
                    },
                    "source": {
                        "borrowerKey": '',
                        "bureau": {},
                        "inquiryDate": "2015-06-09",
                        "reference": "999999-17955963"
                    }
                },
                "accountType": {
                    "abbreviation": "Credit Line",
                    "description": "Line of credit",
                    "symbol": "C",
                    "rank": ''
                }
            }
        ],
        "publicRecords": []
    }
}