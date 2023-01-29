import { ReactNode, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { StyledGoodListItem, StyledGoodListContainer } from './style'
import { iGood, iGoods } from './types'
import { GoodItem } from '../good_item'
// import goodsJSON from '../../stub/goods.json'
import { createExtraActions } from '../../store/actions/goods'

export interface iReduxGoodsState {
    goods: {
        basket: iGoods,
        list: iGoods,
    }
}

export function GoodList(): JSX.Element {

    const { getAllGoods } = createExtraActions()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllGoods())
    }, [])

    const goods: any = useSelector<iReduxGoodsState>(state => state.goods.list)

    return (
        <StyledGoodListContainer>
            {
                goods.map((good: iGood, index: number) => <StyledGoodListItem key={good.ID + index}>
                    <GoodItem data={good} />
                </StyledGoodListItem>) as JSX.Element[] | ReactNode
            }
        </StyledGoodListContainer>
    )
}