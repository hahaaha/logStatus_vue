<template>
    <div id="list">
        <el-table
            :data="tableData">
            <el-table-column
                prop="date"
                label="日期"
            >
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态"
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData:[{
                date: "2018-04-22",
                status: "one"
            },{
                date: "2019-04-23",
                status: "two"
            }]
        }
    }
}
</script>

