import React from 'react';
import { View } from '../../components/Themed';

export default function Row({ children, styles }: any) {
    return (
        <View style={{
            flexDirection: 'row',
            ...styles
        }}>
            {children}
        </View>
    )
}
