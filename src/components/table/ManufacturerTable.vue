<template>
	<div>
		<el-row :gutter="20" type="flex"  align="middle">
			<el-col>
				<el-button type="primary" size="mini" icon="el-icon-delete">批量删除</el-button>			
			</el-col>
			<el-col>
				<el-select v-model="query.selectTpye" placeholder="选择搜索方式">
				    <el-option
				      v-for="item in selectList"
				      :key="item.key"
				      :label="item.value"
				      :value="item.key">
				    </el-option>
				</el-select>
			</el-col>
			<el-col>
				<el-input v-model="query.keyWord" placeholder="请输入关键词"></el-input>
			</el-col>
			<el-col>
				<el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button>
			</el-col>
		</el-row>
		<el-row>
			<el-table
			    :data="manufacturerList"
			    style="width: 100%">
			    <el-table-column label="公司名" width="220">
			      <template slot-scope="scope">
			        <i class="el-icon-s-home" style="color:#20A0FF"></i>
			        <span style="margin-left: 10px">{{ scope.row.name }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="Logo"
			      width="80">
			      <template slot-scope="scope">
			        <el-image :src="scope.logo"></el-image>
			      </template>
			    </el-table-column>
				<el-table-column label="公司口号" align="center">
					<template slot-scope="scope">
						{{scope.row.word}}
					</template>
				</el-table-column>
				<el-table-column label="公司地址" align="center">
					<template slot-scope="scope">
						{{scope.row.location}}
					</template>
				</el-table-column>
				<el-table-column label="公司网址" align="center">
					<template slot-scope="scope">
						<el-link type="primary" @click="onClickWeb(scope.row.website)" >{{scope.row.website}}</el-link>
					</template>
				</el-table-column>
			    <el-table-column label="操作" align="right">
			      <template slot-scope="scope">
			          <el-button
			              type="text"
			              icon="el-icon-edit"
			              @click="handleEdit(scope.$index, scope.row)"
			          >编辑</el-button>
			          <el-button
			              type="text"
			              icon="el-icon-delete"
			              style="color: red;"
			              @click="handleDelete(scope.$index, scope.row)"
			          >删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		</el-row>
		<el-dialog title="修改属性" :visible.sync="dialogFormVisible">
		  <el-form :model="curEditForm">
		    <el-form-item label="公司名称" label-width="120px">
		      <el-input v-model="curEditForm.name" autocomplete="off"></el-input>
		    </el-form-item>
			<el-form-item label="公司Logo" label-width="120px">
			  <el-input v-model="curEditForm.logo" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="公司口号" label-width="120px">
			  <el-input v-model="curEditForm.word" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="公司地址" label-width="120px">
			  <el-input v-model="curEditForm.location" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="公司网址" label-width="120px">
			  <el-input v-model="curEditForm.website" autocomplete="off"></el-input>
			</el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="onEditDialogSave">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				curRowIndex:'',
				curEditForm:{},
				dialogFormVisible:false,
				query:{
					selectTpye:'',
					keyWord:''
				},
				selectList:[
					{
						key:0,
						value:'按公司名'
					},
					{
						key:1,
						value:'按地址'
					},
					{
						key:2,
						value:'按状态'
					},
				],
				manufacturerList:[
					{
						name:'华为终端有限公司',
						location:'中国深圳市龙岗区坂田街道华为基地',
						logo:'https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/17f2dd9756d9d333bee8e60ce8c03e4c_222_222.jpg',
						word:'构建万物智联的世界',
						website:'http://www.huawei.com'
					},
					{
						name:'北京小米科技有限责任公司',
						location:'北京市海淀区清河中街68号 华润五彩城写字楼',
						logo:'http://pic1.jobui.com/companyLogo/8203932/14103576418905.jpg!lsq',
						word:'让每个人都享受科技的乐趣',
						website:'http://www.xiaomi.com'
					},
					{
						name:'中兴通讯股份有限公司',
						location:'深圳市科技南路55号',
						logo:'http://pic1.jobui.com/companyLogo/10878/14303784532927.png!lsq',
						word:'综合通信解决方案提供商',
						website:'http://www.zte.com.cn'
					},
					{
						name:'珠海市魅族科技有限公司',
						location:'珠海市唐家湾高新区留诗路2号厂房1楼',
						logo:'http://pic1.jobui.com/companyLogo/1516529/14107695174109.jpg!lsq',
						word:'打磨 "人、科技、自然和谐互动" 的未来',
						website:'http://www.meizu.com'
					},
					{
						name:'联想移动通信科技有限公司',
						location:'福建厦门市火炬高新区信息光电园岐山北二路999号',
						logo:'http://pic1.jobui.com/companyLogo/675/14099954485904.jpg!lsq',
						word:'如果失去联想世界将会怎样',
						website:'http://www.lenovo.com.cn'
					},
				]
			}
		},
		methods:{
			// 编辑操作
			handleEdit(index, row) {
			    this.curRowIndex = index;
			    this.curEditForm = row;
			    this.dialogFormVisible = true;
			},
			// 删除操作
			handleDelete(index, row) {
			    // 二次确认删除
			    this.$confirm('确定要删除吗？', '提示', {
			        type: 'warning'
			    }).then(() => {
			            this.$message.success('删除成功');
			            this.tableData.splice(index, 1);
			        }).catch(() => {});
			},
			onEditDialogSave(){
				this.dialogFormVisible = false;
				this.$message.success(`修改成功`);
				this.manufacturerList.splice(this.curRowIndex,1,this.curEditForm)
			},
			//跳转公司网址
			onClickWeb(url){
				console.log(url)
				window.location.href = url;
			}
		}
	}
</script>

<style>
</style>
