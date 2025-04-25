import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Info } from "../../features/Product/Info";
import { List } from "../../features/Product/List";
import { useParams } from "react-router-dom";
import { useRequest } from "../../helpers/hooks/useRequest";
import { ProductsRepository } from "../../connectors/repositories/product";
import { motion } from "framer-motion";
export const Product = () => {
    const { itemId } = useParams();  

    const { data, call, isLoading } = useRequest(ProductsRepository.getProducts);

    useEffect(() => {
        if (itemId) {
            call([{ productId: itemId }])
        }
    }, [itemId])

    return (
        <BaseLayout className='space-y-[2rem]'>
            <Info {...data?.data} isLoading={isLoading} />
            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <List list={data?.data?.mooGoldItems} isLoading={isLoading} />
            </motion.div>
        </BaseLayout>
    )
}